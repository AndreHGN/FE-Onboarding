
export function removeData() {
    const generalInfoDiv = document.getElementsByClassName("general-info-container").item(0);
    if (generalInfoDiv) generalInfoDiv.remove();

    const cards = document.getElementsByClassName("card");
    if (cards) Array.from(cards).forEach(card => card.remove());
}

export function removeLoader() {
    const loader = document.getElementsByClassName("loader").item(0);
    if (loader) loader.remove();
}

export function removeSmallLoader() {
    const smallLoaders = document.getElementsByClassName("small-loader");
    if (smallLoaders) Array.from(smallLoaders).forEach(smallLoader => smallLoader.remove());
}

export function removePagination() {
    const pageNumericButtons = document.getElementsByClassName("number");
    if (pageNumericButtons) Array.from(pageNumericButtons).forEach(button => button.remove());
}

export function removeError() {
    const errorMessage = document.getElementsByClassName("error").item(0);
    if (errorMessage) errorMessage.remove();
}