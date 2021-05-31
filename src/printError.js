export default printError;

function printError(error) {

    const errorMessage = document.createElement('h2');
    errorMessage.className = "error";
    errorMessage.innerHTML = `${error}`;

    const bodyContainerDiv = document.getElementsByClassName("container").item(0);
    const gridContainer = document.getElementsByClassName("grid-container").item(0);
    
    bodyContainerDiv.insertBefore(errorMessage, gridContainer);

}