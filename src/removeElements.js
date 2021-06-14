
export function removeData() {
    const generalInfoDiv = document.getElementsByClassName("general-info-container").item(0);
    generalInfoDiv?.remove();

    const cards = document.getElementsByClassName("card");
    Array.from(cards).forEach(card => card?.remove());
}

export function removeLoader() {
    const loader = document.getElementsByClassName("loader").item(0);
    loader?.remove();
}

export function removeSmallLoaders() {
    const smallLoaderTop = document.getElementsByClassName("small-loader top").item(0);
    const smallLoaderBottom = document.getElementsByClassName("small-loader bottom").item(0);
    
    smallLoaderTop?.remove();
    smallLoaderBottom?.remove();
}

export function removePagination() {
    const pageNumericButtons = document.getElementsByClassName("number");
    Array.from(pageNumericButtons).forEach(button => button?.remove());
}

export function removeError() {
    const errorMessage = document.getElementsByClassName("error").item(0);
    errorMessage?.remove();
}