import filterData from "./filterData";

export default setupFilterName;

function setupFilterName() {
    const filterNameInput = document.getElementById("filter-name");
    const filterNameButton = document.getElementById("filter-name-button");

    filterNameButton.onclick = () => filterData(filterNameInput.value);
}