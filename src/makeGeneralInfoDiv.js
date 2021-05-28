export default makeGeneralInfoDiv;

function makeGeneralInfoDiv(episodes) {

    const generalInfoDiv = document.createElement('div');
    generalInfoDiv.className = "general-info-container";

    const listed = document.createElement('p');
    listed.innerHTML = `Quantidade de episódios listados: ${episodes.results.length}`;

    const total = document.createElement('p');
    total.innerHTML = `Total de episódios: ${episodes.info.count}`;

    generalInfoDiv.appendChild(listed);
    generalInfoDiv.appendChild(total);

    return generalInfoDiv;

}