export default makeGeneralInfoDiv;

function makeGeneralInfoDiv(generalInfo) {

    const generalInfoDiv = document.createElement('div');
    generalInfoDiv.className = "general-info-container";

    const listed = document.createElement('p');
    listed.innerHTML = `Listed episodes: ${generalInfo.listedEpisodes}`;

    const total = document.createElement('p');
    total.innerHTML = `Total of episodes: ${generalInfo.totalEpisodes}`;

    generalInfoDiv.appendChild(listed);
    generalInfoDiv.appendChild(total);

    return generalInfoDiv;

}