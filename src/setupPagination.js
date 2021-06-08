import updateData from "./updateData.js";

export default setupPagination;

function updateSelectedButton(currentPage) {
    const oldButton = document.getElementsByClassName("selected");
    Array.from(oldButton).forEach(button => button.classList.remove("selected"));

    const newButton = document.getElementsByClassName(currentPage);
    Array.from(newButton).forEach(button => button.classList.add("selected"));
}

function goToNextPage(currentPage, maxPage, filterName) {
    if (currentPage !== maxPage) {
        currentPage += 1;
        updateData(currentPage, filterName);
        updateSelectedButton(currentPage);
    }
    else alert("There are no following pages!")
}

function goToPrevPage(currentPage, filterName) {
    if (currentPage !== 1) {
        currentPage -= 1;
        updateData(currentPage, filterName);
        updateSelectedButton(currentPage);
    }
    else alert("There are no previous pages")
}

function goToPageNumber(pageNumber, filterName) {
    const currentPage = pageNumber;
    updateData(currentPage, filterName);
    updateSelectedButton(currentPage);
}

function setupPagination(currentPage, maxPage, filterName) {

    const nextPageButton = document.getElementsByClassName("next");
    Array.from(nextPageButton).forEach(button => button.onclick = () => {goToNextPage(currentPage, maxPage, filterName)});
    
    const prevPageButton = document.getElementsByClassName("previous");
    Array.from(prevPageButton).forEach(button => button.onclick = () => {goToPrevPage(currentPage, filterName)});
    
    const pageNumbericButton = document.getElementsByClassName("number");
    Array.from(pageNumbericButton).forEach((button, index) => button.onclick = () => {goToPageNumber(index+1, filterName)});

}