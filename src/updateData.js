
import { renderData} from './renderElements.js';
import { removeData } from './removeElements.js';
import getEpisodes from './getEpisodes.js';
import setupPagination from './setupPagination.js';

export default updateData;

async function updateData(currentPage) {
    
    removeData();
    const episodes = await getEpisodes(currentPage);
    const maxPage = episodes.info.pages;
    renderData(episodes);
    setupPagination(currentPage, maxPage);

}