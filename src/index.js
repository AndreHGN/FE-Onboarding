import _ from 'lodash';
import printError from './printError';
import getEpisodes from './getEpisodes.js';
import renderData from './renderData.js';
import { renderLoader, removeLoader } from './renderData.js';

async function main() {
    
    renderLoader();
    
    try {
        const response = await getEpisodes();
        const episodes = response.data.data.episodes;
        renderData(episodes);
    }
    catch(error) {
        printError(error.message);
    }
    finally{
        removeLoader();
    }
    
}

main();