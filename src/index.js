import _ from 'lodash';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import { renderData, renderPagination } from './renderElements.js';

async function initialize() {

    const initialPage = 1;
    const episodes = await getEpisodes(initialPage);
    const maxPage = episodes.info.pages;

    renderData(episodes);
    renderPagination(initialPage, maxPage);
    setupPagination(initialPage, maxPage);
    
}


initialize();