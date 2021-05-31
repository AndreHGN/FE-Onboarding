import makeGeneralInfoDiv from './makeGeneralInfoDiv.js';
import makeCard from './makeCard.js';

export default renderData;

const bodyContainerDiv = document.getElementsByClassName("container").item(0);
const gridContainer = document.getElementsByClassName("grid-container").item(0);

function renderData(episodes) {

    const generalInfo = {
        listedEpisodes: episodes.results.length,
        totalEpisodes: episodes.info.count
    };

    // Render the general information 
    const containerLine = document.getElementsByClassName("container-line").item(0);
    bodyContainerDiv.insertBefore(makeGeneralInfoDiv(generalInfo), containerLine);

    // Render each episode card
    episodes.results.forEach( episode => gridContainer.appendChild(makeCard(episode)));

}

export function renderLoader() {
    const loader = document.createElement('div');
    loader.className = "loader";

    bodyContainerDiv.insertBefore(loader, gridContainer);
}

export function removeLoader() {
    const loader = document.getElementsByClassName("loader").item(0);
    loader.remove();
}