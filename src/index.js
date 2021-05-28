import _ from 'lodash';
import printResponse from './printResponse';
import printError from './printError';
import getEpisodes from './getEpisodes.js';
import renderData from './renderData.js';


// Mock information
const episode = {
  enumeration: "S01E01",
  title: "Piloto",
  airDate: "02/12/2013",
  characters: ["Rick Sanches", "Morty Smith", "Beth Smith", "Jerry Smith", "Summer Smith",
               "Jessica", "Mr. Goldenfold", "Frank Palincky", "Davin", "Glenn"],
  totalOfEpisodes: 41,
  episodesListed: 1
}


// Get the episodes from the database and prints it on the console
getEpisodes().then(printResponse).catch(printError);


// Render the episode's information
renderData(episode);
