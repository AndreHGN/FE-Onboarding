export default makeGeneralInfoDiv;

function makeGeneralInfoDiv(episode) {

    const generalInfoDiv = document.createElement('div');
    generalInfoDiv.className = "general-info-container";

    const listed = document.createElement('p');
    listed.innerHTML = `Quantidade de episódios listados: ${episode.episodesListed}`;

    const total = document.createElement('p');
    total.innerHTML = `Total de episódios: ${episode.totalOfEpisodes}`;

    generalInfoDiv.appendChild(listed);
    generalInfoDiv.appendChild(total);

    return generalInfoDiv;

}