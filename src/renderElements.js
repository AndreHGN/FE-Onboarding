import makeGeneralInfoDiv from './makeGeneralInfoDiv.js';
import makeCard from './makeCard.js';
import makePageButtons from './makePageButtons.js'

const bodyContainerDiv = document.getElementsByClassName("container").item(0);
const gridContainer = document.getElementsByClassName("grid-container").item(0);

export function renderData(episodes) {

    const generalInfo = {
        listedEpisodes: episodes.results.length,
        totalEpisodes: episodes.info.count
    };

    // Render the general information 
    const paginationDiv = document.getElementsByClassName("pagination").item(0);
    bodyContainerDiv.insertBefore(makeGeneralInfoDiv(generalInfo), paginationDiv);

    // Render each episode card
    episodes.results.forEach( episode => gridContainer.appendChild(makeCard(episode)));

}

export function renderLoader() {
    const loader = document.createElement('div');
    loader.className = "loader";

    bodyContainerDiv.insertBefore(loader, gridContainer);
}

export function renderPagination(currentPage, maxPage) {

    const pageButtonsTop = makePageButtons(currentPage, maxPage);
    const pageButtonsBottom = makePageButtons(currentPage, maxPage);

    const paginationDivs = document.getElementsByClassName("pagination");
    const nextPageButtons = document.getElementsByClassName("next");


    pageButtonsTop.forEach(button => {
        paginationDivs.item(0).insertBefore(button, nextPageButtons.item(0));
    });

    pageButtonsBottom.forEach(button => {
        paginationDivs.item(1).insertBefore(button, nextPageButtons.item(1));
    });

}
