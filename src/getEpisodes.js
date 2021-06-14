import axios from 'axios';
export default getEpisodes;

async function getEpisodes(currentPage, filterName, cancelToken) {

    const response = await axios({
        method: 'post',
        url: 'https://rickandmortyapi.com/graphql',
        data: {
            query:`query EpisodesResults{
                    episodes (page: ${currentPage}, filter: {name: "${filterName}"}) {
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
        },
        cancelToken: cancelToken
    });

    return response.data.data.episodes;

}

  