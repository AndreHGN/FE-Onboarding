
import { renderData, renderLoader} from './renderElements.js';
import { removeData, removeError, removeLoader } from './removeElements.js';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import printError from './printError.js';

export default updateData;

async function updateData(currentPage, filterName) {
    
    removeError();
    removeData();

    renderLoader();

    try {
        const episodes = await getEpisodes(currentPage, filterName);

        if (!episodes) throw new Error("Page not found");

        const maxPage = episodes.info.pages;
        renderData(episodes);
        setupPagination(currentPage, maxPage, filterName);
    }
    catch (error) {
        printError(error.message);
    }
    finally {
        removeLoader();
    }

}