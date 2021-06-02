export default makePageNumericButtons;

function makeNumericButton(pageNumber) {

    const pageNumericButton = document.createElement("button");
    pageNumericButton.className = `page number ${pageNumber}` ;

    pageNumericButton.innerHTML = `${pageNumber}`;

    return pageNumericButton;

}

function makePageNumericButtons(currentPage, maxPage) {

    const pageNumericButtons = Array(maxPage).fill().map((_, i) => makeNumericButton(i+1));

    pageNumericButtons[currentPage-1].classList.add("selected");

    return pageNumericButtons;

}