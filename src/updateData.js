
import { renderData, renderLoader} from './renderElements.js';
import { removeData, removeLoader } from './removeElements.js';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import printError from './printError.js';

export default updateData;

async function updateData(currentPage) {
    
    removeData();

    renderLoader();

    try {
        const episodes = await getEpisodes(currentPage);
        const maxPage = episodes.info.pages;
        renderData(episodes);
        setupPagination(currentPage, maxPage);
    }
    catch (error) {
        printError(error.message);
    }
    finally {
        removeLoader();
    }

}