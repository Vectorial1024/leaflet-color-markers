import { makeColoredMarkerIcon, makeColoredMarkerSvgIcon } from './utils.js';

export const defaultIcon = makeColoredMarkerSvgIcon();

export const blueIcon = defaultIcon;

export const goldIcon = makeColoredMarkerIcon('img/marker-icon-gold.png', 'img/marker-icon-2x-gold.png');

export const greenIcon = makeColoredMarkerIcon('img/marker-icon-green.png', 'img/marker-icon-2x-green.png');

export const yellowIcon = makeColoredMarkerIcon('img/marker-icon-yellow.png', 'img/marker-icon-2x-yellow.png');

export const violetIcon = makeColoredMarkerIcon('img/marker-icon-violet.png', 'img/marker-icon-2x-violet.png');

/*
Red spectrum icons
*/

export const pinkIcon = makeColoredMarkerIcon('img/marker-icon-pink.svg', 'img/marker-icon-pink.svg');

export const redIcon = makeColoredMarkerIcon('img/marker-icon-red.svg', 'img/marker-icon-red.svg');

export const copperIcon = makeColoredMarkerIcon('img/marker-icon-copper.svg', 'img/marker-icon-copper.svg');

export const orangeIcon = makeColoredMarkerIcon('img/marker-icon-orange.svg', 'img/marker-icon-orange.svg');

/*
Greyscale icons
*/

export const whiteIcon = makeColoredMarkerIcon('img/marker-icon-white.svg', 'img/marker-icon-white.svg');

export const lightGreyIcon = makeColoredMarkerIcon('img/marker-icon-light-grey.svg', 'img/marker-icon-light-grey.svg');

export const greyIcon = makeColoredMarkerIcon('img/marker-icon-grey.svg', 'img/marker-icon-grey.svg');

export const darkGreyIcon = makeColoredMarkerIcon('img/marker-icon-dark-grey.svg', 'img/marker-icon-dark-grey.svg');

export const blackIcon = makeColoredMarkerIcon('img/marker-icon-black.svg', 'img/marker-icon-black.svg');
