import makeGeneralInfoDiv from './makeGeneralInfoDiv.js';
import makeCard from './makeCard.js';

export default renderData;

function renderData(episode) {

    // Get the container div and insert the general information in the middle (before the line)
    const bodyContainerDiv = document.getElementsByClassName("container").item(0);
    const containerLine = document.getElementsByClassName("container-line").item(0);
    bodyContainerDiv.insertBefore(makeGeneralInfoDiv(episode), containerLine);

    // Get the grid container from the document and insert a card inside of it
    const gridContainer = document.getElementsByClassName("grid-container").item(0);
    gridContainer.appendChild(makeCard(episode));

}