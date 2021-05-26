import _ from 'lodash';
import axios from 'axios';


// Quantity of episodes
let total = document.createTextNode("41");
let listed = document.createTextNode("1");


// Information about the episode (to be displayed in the card)
let epEnumeration = "S01E01";
let epTitle = "Piloto";
let epAirDate = "02/12/2013";
let epCharacters = ["Rick Sanches", "Morty Smith", "Beth Smith", "Jerry Smith", "Summer Smith",
                    "Jessica", "Mr. Goldenfold", "Frank Palincky", "Davin", "Glenn"];


// FUNCTION THAT TAKES THE EPISODE'S INFO AND MAKES A CARD OUT OF IT
function makeCard() {

  // creating the Card div
  const Card = document.createElement('div')
  Card.className = "card";

  // creating the Name-Date div
  const NameDate = document.createElement('div');
  NameDate.className = "name-date";

  // creating the Line hr
  const Line = document.createElement('hr');
  Line.className = "line-card";

  // creating the Characters div
  const Characters = document.createElement('div');
  Characters.className = "characters";

  // creating the list of characters div
  const CharList = document.createElement('div');
  CharList.className = "char-list";

  // inserting the episode's enumeration, title and air date
  NameDate.innerHTML = `<h2>${epEnumeration} - ${epTitle}</h2>
                        <p>${epAirDate}</p>`;

  // inserting characters in the list
  Characters.innerHTML = `<h4>Personagens: </h4>`;
  for (let i = 0; i < (epCharacters.length/5); i++) {
    let Ul = document.createElement('ul');
    for (let j = 0; j < 5 && (5*i + j) < epCharacters.length; j++) {
      let index = 5*i + j;
      Ul.innerHTML += `<li>${epCharacters[index]}</li>`;
    }
    CharList.appendChild(Ul);
  }

  // inserting each set of list in the Characters div
  Characters.appendChild(CharList);
  
  // inserting all divs in the Card
  Card.appendChild(NameDate);
  Card.appendChild(Line);
  Card.appendChild(Characters);

  return Card;

}


// FUNCTION THAT PRINTS AN ERROR IF THE REQUEST FAILS
function printError(error) {
  console.log("Deu ruim: ", error);
}


// FUNCTION THAT PRINTS THE RESPONSE
function printResponse(response) {
  let episodes = response.data.data.episodes.results
  console.log(episodes);
}


// FUNCTION TO GET THE EPISODES FROM THE DATABASE
function getEpisodes() {
  
  axios({
    method: 'post',
    url: 'https://rickandmortyapi.com/graphql',
    data: {
      query:`query EpisodesResults{
          episodes {
            results {
              id
              name
              air_date
              episode
              characters {
                id
                name
              }
            }
          }
        }`
    }
  }).then(printResponse).catch(printError);

}


getEpisodes();


// Insert the quantity of episodes (total and listed)
document.getElementById("total-quantity").append(total);
document.getElementById("listed-quantity").append(listed); 


// Get the grid container from the document and insert a card inside of it
const GridContainer = document.getElementsByClassName("grid-container");
GridContainer.item(0).appendChild(makeCard());
