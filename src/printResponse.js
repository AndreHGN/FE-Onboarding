export default printResponse;

// FUNCTION THAT PRINTS THE RESPONSE FROM A REQUEST
function printResponse(response) {

    const episodes = response.data.data.episodes.results
    console.log(episodes);

}