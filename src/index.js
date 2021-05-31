import _ from 'lodash';
import printError from './printError';
import getEpisodes from './getEpisodes.js';
import renderData from './renderData.js';
import { renderLoader, removeLoader } from './renderData.js';

async function main() {
    
    renderLoader();
    
    const response = await getEpisodes().catch(error => error);
    
    removeLoader();
    const episodes = response.data ? response.data.data.episodes : null;

    episodes ? renderData(episodes) : printError(response);
}

main();