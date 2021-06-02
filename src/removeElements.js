
export function removeData() {
    const generalInfoDiv = document.getElementsByClassName("general-info-container").item(0);
    generalInfoDiv.remove();

    const cards = document.getElementsByClassName("card");
    Array.from(cards).forEach(card => card.remove());
}

export function removeLoader() {
    const loader = document.getElementsByClassName("loader").item(0);
    loader.remove();
}

export function removeSmallLoader() {
    const smallLoaders = document.getElementsByClassName("small-loader");
    Array.from(smallLoaders).forEach(smallLoader => smallLoader.remove());
}

export function removePagination() {
    const pageNumericButtons = document.getElementsByClassName("number");
    Array.from(pageNumericButtons).forEach(button => button.remove());
}