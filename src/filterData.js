
import { renderData, renderLoader, renderPagination, renderSmallLoaders} from './renderElements.js';
import { removeData, removeError, removeLoader, removePagination, removeSmallLoaders } from './removeElements.js';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import printError from './printError.js';
import setupFilterName from './setupFilterName.js';
import axios from 'axios';

export default filterData;

async function filterData(filterName, source) {
    
    source.cancel("Request canceled");
    
    removeError();
    removeData();
    removePagination();
    
    renderLoader();
    renderSmallLoaders();
    
    try {
        const currentPage = 1;
        const sourceToCancelRequest = axios.CancelToken.source();
        const cancelToken = sourceToCancelRequest.token;
        
        setupFilterName(sourceToCancelRequest);

        const episodes = await getEpisodes(currentPage, filterName, cancelToken);

        if (!episodes) throw new Error("Episodes not found");

        const maxPage = episodes.info.pages;

        renderData(episodes);
        renderPagination(currentPage, maxPage);
        setupPagination(currentPage, maxPage, filterName, sourceToCancelRequest);
    }
    catch (error) {
        if (error.message != "Request canceled") printError(error.message);
    }
    finally {
        removeLoader();
        removeSmallLoaders();
    }

}