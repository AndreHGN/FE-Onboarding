import { renderData, renderLoader, renderPagination, renderSmallLoader} from './renderElements.js';
import { removeData, removeError, removeLoader, removePagination, removeSmallLoader } from './removeElements.js';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import printError from './printError.js';

export default filterData;

async function filterData(filterName) {
    
    removeError();
    removeData();
    removePagination();

    renderLoader();
    renderSmallLoader();

    try {
        const currentPage = 1;
        const episodes = await getEpisodes(currentPage, filterName);

        if (!episodes) throw new Error("Episodes not found");

        const maxPage = episodes.info.pages;

        renderData(episodes);
        renderPagination(currentPage, maxPage);
        setupPagination(currentPage, maxPage, filterName);
    }
    catch (error) {
        printError(error.message);
    }
    finally {
        removeLoader();
        removeSmallLoader();
    }

}