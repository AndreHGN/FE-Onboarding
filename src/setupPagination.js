import updateData from "./updateData.js";

export default setupPagination;

function updateSelectedButton(currentPage) {
    const oldButton = document.getElementsByClassName("selected");
    Array.from(oldButton).forEach(button => button.classList.remove("selected"));

    const newButton = document.getElementsByClassName(currentPage);
    Array.from(newButton).forEach(button => button.classList.add("selected"));
}

function goToNextPage(currentPage, maxPage, filterName, source) {
    if (currentPage !== maxPage) {
        currentPage += 1;
        updateData(currentPage, maxPage, filterName, source);
        updateSelectedButton(currentPage);
    }
    else alert("There are no following pages!")
}

function goToPrevPage(currentPage, maxPage, filterName, source) {
    if (currentPage !== 1) {
        currentPage -= 1;
        updateData(currentPage, maxPage, filterName, source);
        updateSelectedButton(currentPage);
    }
    else alert("There are no previous pages")
}

function goToPageNumber(pageNumber, maxPage, filterName, source) {
    const currentPage = (pageNumber <= maxPage) ? pageNumber : pageNumber-maxPage;
    updateData(currentPage, maxPage, filterName, source);
    updateSelectedButton(currentPage);
}

function setupPagination(currentPage, maxPage, filterName, source) {

    const nextPageButton = document.getElementsByClassName("next");
    Array.from(nextPageButton).forEach(button => button.onclick = () => {goToNextPage(currentPage, maxPage, filterName, source)});
    
    const prevPageButton = document.getElementsByClassName("previous");
    Array.from(prevPageButton).forEach(button => button.onclick = () => {goToPrevPage(currentPage, maxPage, filterName, source)});
    
    const pageNumbericButton = document.getElementsByClassName("number");
    Array.from(pageNumbericButton).forEach((button, index) => button.onclick = () => {goToPageNumber(index+1, maxPage, filterName, source)});

}