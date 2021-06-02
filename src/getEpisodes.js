import axios from 'axios';
import printError from './printError';
import {renderLoader} from './renderElements';
import {removeLoader} from './removeElements';

export default getEpisodes;

async function getEpisodes(currentPage) {

    renderLoader();

    try {
        const response = await axios({
            method: 'post',
            url: 'https://rickandmortyapi.com/graphql',
            data: {
                query:`query EpisodesResults{
                        episodes (page: ${currentPage}) {
                            info{
                                count
                                pages
                            }
                            results{
                                id
                                name
                                air_date
                                episode
                                characters {
                                    id
                                    name
                                }
                            }
                        }
                    }`
            }
        });
        return response.data.data.episodes;
    }
    catch (error) {
        printError(error.message);
    }
    finally {
        removeLoader();
    }

}

  