import makeGeneralInfoDiv from './makeGeneralInfoDiv.js';
import makeCard from './makeCard.js';
import makePageNumericButtons from './makePageNumericButtons.js'

const bodyContainerDiv = document.getElementsByClassName("container").item(0);
const gridContainer = document.getElementsByClassName("grid-container").item(0);

const [paginationDivTop, paginationDivBottom] = document.getElementsByClassName("pagination");
const [nextPageButtonTop, nextPageButtonBottom] = document.getElementsByClassName("next");

export function renderData(episodes) {

    const generalInfo = {
        listedEpisodes: episodes.results.length,
        totalEpisodes: episodes.info.count
    };

    // Render the general information 
    const filterDiv = document.getElementsByClassName("filter-container").item(0);
    bodyContainerDiv.insertBefore(makeGeneralInfoDiv(generalInfo), filterDiv);

    // Render each episode card
    episodes.results.forEach( episode => gridContainer.appendChild(makeCard(episode)));

}

export function renderLoader() {
    const loader = document.createElement('div');
    loader.className = "loader";

    bodyContainerDiv.insertBefore(loader, gridContainer);
}

export function renderSmallLoader() {
    const smallLoader = document.createElement('div');
    smallLoader.className = "small-loader";

    paginationDivTop.insertBefore(smallLoader, nextPageButtonTop);
    paginationDivBottom.insertBefore(smallLoader.cloneNode(true), nextPageButtonBottom);
}

export function renderPagination(currentPage, maxPage) {

    const pageNumericButtons = makePageNumericButtons(currentPage, maxPage);

    pageNumericButtons.forEach(button => {
        paginationDivTop.insertBefore(button, nextPageButtonTop);
        paginationDivBottom.insertBefore(button.cloneNode(true), nextPageButtonBottom);
    });

}

