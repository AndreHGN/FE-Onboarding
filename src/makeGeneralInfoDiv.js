export default makeGeneralInfoDiv;

function makeGeneralInfoDiv(episodes) {

    const generalInfoDiv = document.createElement('div');
    generalInfoDiv.className = "general-info-container";

    const listed = document.createElement('p');
    listed.innerHTML = `Quantity of listed episodes: ${episodes.results.length}`;

    const total = document.createElement('p');
    total.innerHTML = `Total of episodes: ${episodes.info.count}`;

    generalInfoDiv.appendChild(listed);
    generalInfoDiv.appendChild(total);

    return generalInfoDiv;

}