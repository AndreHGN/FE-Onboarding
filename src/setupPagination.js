import updateData from "./updateData.js";

export default setupPagination;

function updateSelectedButton(currentPage) {
    const oldButtons = document.getElementsByClassName("selected");
    Array.from(oldButtons).forEach(button => button.classList.remove("selected"));

    const newButton = document.getElementsByClassName(currentPage);
    Array.from(newButton).forEach(button => button.classList.add("selected"));
}

function goToNextPage(currentPage, maxPage) {
    return function() {
        if (currentPage !== maxPage) {
            currentPage += 1;
            updateData(currentPage);
            updateSelectedButton(currentPage);
        }
    }
}

function goToPrevPage(currentPage) {
    return function() {
        if (currentPage !== 1) {
            currentPage -= 1;
            updateData(currentPage);
            updateSelectedButton(currentPage);
        }
    }
}

function goToPageNumber(currentPage) {
    return function() {
        currentPage = parseInt(this.innerHTML);
        updateData(currentPage);
        updateSelectedButton(currentPage);
    }
}

function setupPagination(currentPage, maxPage) {

    const nextPageButton = document.getElementsByClassName("next");
    Array.from(nextPageButton).forEach(button => button.onclick = goToNextPage(currentPage, maxPage));
    
    const prevPageButton = document.getElementsByClassName("previous");
    Array.from(prevPageButton).forEach(button => button.onclick = goToPrevPage(currentPage));
    
    const pageNumberButton = document.getElementsByClassName("number");
    Array.from(pageNumberButton).forEach(button => button.onclick = goToPageNumber(currentPage));

}