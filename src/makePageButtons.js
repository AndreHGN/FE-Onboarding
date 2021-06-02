export default makePageButtons;

function makeButton(pageNumber) {

    const pageButton = document.createElement("button");
    pageButton.className = `page number ${pageNumber}` ;

    pageButton.innerHTML = `${pageNumber}`;

    return pageButton;

}

function makePageButtons(currentPage, maxPage) {

    const pageButtons = [...Array(maxPage)].map((_, i) => makeButton(i+1));

    pageButtons[currentPage-1].classList.add("selected");

    return pageButtons;

}