export default makeCard;

function makeCard(episode) {

    const card = document.createElement('div')
    card.className = "card";
  
    const nameDateDiv = document.createElement('div');
    nameDateDiv.className = "name-date";
  
    const cardLine = document.createElement('hr');
    cardLine.className = "line-card";

    const charactersTitle = document.createElement('h4');
    charactersTitle.innerHTML = "Personagens: ";
  
    const charactersDiv = document.createElement('div');
    charactersDiv.className = "characters";
  
    // inserting the episode's enumeration, title and air date
    nameDateDiv.innerHTML = `<h2>${episode.enumeration} - ${episode.title}</h2>
                             <p>${episode.airDate}</p>`;
    
    // inserting characters in the list
    let listContent = "";
    episode.characters.forEach( (character, index, array) => {

        listContent += `<li>${character}</li>`;
        
        // separates the characters in sets of 5
        if ((index != 0 && (index+1)%5 == 0) || index == array.length-1) {
            const characterList = document.createElement('ul');
            characterList.innerHTML = listContent;
            charactersDiv.appendChild(characterList);
            listContent = "";
        }

    });
    
    // inserting all elements required in the Card
    card.appendChild(nameDateDiv);
    card.appendChild(cardLine);
    card.appendChild(charactersTitle);
    card.appendChild(charactersDiv);
  
    return card;
  
}