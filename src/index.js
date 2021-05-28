import _ from 'lodash';
import printError from './printError';
import getEpisodes from './getEpisodes.js';
import renderData from './renderData.js';

getEpisodes().then(renderData).catch(printError);
