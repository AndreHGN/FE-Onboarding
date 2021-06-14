
import { renderData, renderLoader} from './renderElements.js';
import { removeData, removeError, removeLoader } from './removeElements.js';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';
import printError from './printError.js';
import axios from 'axios';

export default updateData;

async function updateData(currentPage, maxPage, filterName, source) {

    source.cancel("Request canceled");

    removeError();
    removeData();
    
    renderLoader();
    
    try {
        const sourceToCancelRequest = axios.CancelToken.source();
        const cancelToken = sourceToCancelRequest.token;
        setupPagination(currentPage, maxPage, filterName, sourceToCancelRequest);

        const episodes = await getEpisodes(currentPage, filterName, cancelToken);

        if (!episodes) throw new Error("Not found");

        renderData(episodes);
    }
    catch (error) {
        if (error.message != "Request canceled") printError(error.message);
    }
    finally {
        removeLoader();
    }

}