import _ from 'lodash';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import { renderData, renderLoader, renderPagination, renderSmallLoader } from './renderElements.js';
import printError from './printError.js';
import { removeLoader, removeSmallLoader } from './removeElements.js';

async function initialize() {

    renderLoader();
    renderSmallLoader();

    try {
        const initialPage = 1;
        const episodes = await getEpisodes(initialPage);
        const maxPage = episodes.info.pages;
    
        renderData(episodes);
        renderPagination(initialPage, maxPage);
        setupPagination(initialPage, maxPage);
    }
    catch(error) {
        printError(error.message);
    }
    finally {
        removeLoader();
        removeSmallLoader();
    }
    
}


initialize();