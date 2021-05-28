export default printError;

// FUNCTION THAT PRINTS AN ERROR IF THE REQUEST FAILS
function printError(error) {

    const errorMessage = `<h2 class="error">${error}</h2>`;

    const gridContainer = document.getElementsByClassName("grid-container").item(0);
    gridContainer.style.display = "flex";
    gridContainer.innerHTML = errorMessage;

}