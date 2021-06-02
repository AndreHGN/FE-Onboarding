import updateData from "./updateData.js";

export default setupPagination;

function updateSelectedButton(currentPage) {
    const oldButtons = document.getElementsByClassName("selected");
    Array.from(oldButtons).forEach(button => button.classList.remove("selected"));

    const newButton = document.getElementsByClassName(currentPage);
    Array.from(newButton).forEach(button => button.classList.add("selected"));
}

function goToNextPage(currentPage, maxPage) {
    if (currentPage !== maxPage) {
        currentPage += 1;
        updateData(currentPage);
        updateSelectedButton(currentPage);
    }
    else alert("There are no following pages!")
}

function goToPrevPage(currentPage) {
    if (currentPage !== 1) {
        currentPage -= 1;
        updateData(currentPage);
        updateSelectedButton(currentPage);
    }
    else alert("There are no previous pages")
}

function goToPageNumber(pageNumber) {
    const currentPage = pageNumber;
    updateData(currentPage);
    updateSelectedButton(currentPage);
}

function setupPagination(currentPage, maxPage) {

    const nextPageButton = document.getElementsByClassName("next");
    Array.from(nextPageButton).forEach(button => button.onclick = () => {goToNextPage(currentPage, maxPage)});
    
    const prevPageButton = document.getElementsByClassName("previous");
    Array.from(prevPageButton).forEach(button => button.onclick = () => {goToPrevPage(currentPage)});
    
    const pageNumbericButton = document.getElementsByClassName("number");
    Array.from(pageNumbericButton).forEach((button, index) => button.onclick = () => {goToPageNumber(index+1)});

}