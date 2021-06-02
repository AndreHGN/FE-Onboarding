export default makeCard;

function isEven(number) {
    return number % 2 === 0; 
}

function makeCard(episode) {

    const card = document.createElement('div')
    card.className = "card";
  
    const nameDateDiv = document.createElement('div');
    nameDateDiv.className = "name-date";
  
    const cardLine = document.createElement('hr');
    cardLine.className = "line-card";

    const charactersTitle = document.createElement('h4');
    charactersTitle.innerHTML = "Characters: ";
  
    const charactersDiv = document.createElement('div');
    charactersDiv.className = "characters";
  
    const characterListEven = document.createElement('ul');
    
    const characterListOdd = document.createElement('ul');


    nameDateDiv.innerHTML = `<h2>${episode.episode} - ${episode.name}</h2><p>${episode.air_date}</p>`;
    

    episode.characters.forEach( (character, index) => {
        
        const correctList = isEven(index) ? characterListEven : characterListOdd;
        correctList.innerHTML += `<li>${character.name}</li>`; 
        
    });

    charactersDiv.appendChild(characterListEven);
    charactersDiv.appendChild(characterListOdd);

    card.appendChild(nameDateDiv);
    card.appendChild(cardLine);
    card.appendChild(charactersTitle);
    card.appendChild(charactersDiv);
  
    return card;
  
}