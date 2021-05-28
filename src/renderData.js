import makeGeneralInfoDiv from './makeGeneralInfoDiv.js';
import makeCard from './makeCard.js';

export default renderData;

function renderData(response) {

    const episodes = response.data.data.episodes;

    // Render the general information 
    const bodyContainerDiv = document.getElementsByClassName("container").item(0);
    const containerLine = document.getElementsByClassName("container-line").item(0);
    bodyContainerDiv.insertBefore(makeGeneralInfoDiv(episodes), containerLine);

    // Render each episode card
    const gridContainer = document.getElementsByClassName("grid-container").item(0);
    episodes.results.forEach( episode => {
        
        gridContainer.appendChild(makeCard(episode));

    });

}