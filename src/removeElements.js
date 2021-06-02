
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

export function removePagination() {
    const pageButtons = document.getElementsByClassName("number");
    Array.from(pageButtons).forEach(button => button.remove());
}