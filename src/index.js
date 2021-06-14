import _ from 'lodash';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import { renderData, renderLoader, renderPagination, renderSmallLoaders } from './renderElements.js';
import printError from './printError.js';
import { removeLoader, removeSmallLoaders } from './removeElements.js';
import setupFilterName from './setupFilterName.js';
import axios from 'axios';

async function initialize() {

    renderLoader();
    renderSmallLoaders();

    try {
        const initialPage = 1;
        const sourceToCancelRequest = axios.CancelToken.source();
        const cancelToken = sourceToCancelRequest.token;
        const episodes = await getEpisodes(initialPage, _, cancelToken);
        const maxPage = episodes.info.pages;
    
        renderData(episodes);
        renderPagination(initialPage, maxPage);
        setupPagination(initialPage, maxPage, _, sourceToCancelRequest);
        setupFilterName(sourceToCancelRequest);
    }
    catch(error) {
        printError(error.message);
    }
    finally {
        removeLoader();
        removeSmallLoaders();
    }
    
}


initialize();