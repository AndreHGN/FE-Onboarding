import axios from 'axios';
export default getEpisodes;

function getEpisodes() {

    return axios({
        method: 'post',
        url: 'https://rickandmortyapi.com/graphql',
        data: {
            query:`query EpisodesResults{
                    episodes {
                        info{
                            count
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

}

  