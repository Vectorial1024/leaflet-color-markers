import { makeColoredMarkerIcon, makeColoredMarkerSvgIcon } from './utils.js';

export const defaultIcon = makeColoredMarkerSvgIcon();

/*
Red spectrum icons
*/

export const pinkIcon = makeColoredMarkerIcon('img/marker-icon-pink.svg', 'img/marker-icon-pink.svg');

export const redIcon = makeColoredMarkerIcon('img/marker-icon-red.svg', 'img/marker-icon-red.svg');

export const copperIcon = makeColoredMarkerIcon('img/marker-icon-copper.svg', 'img/marker-icon-copper.svg');

export const orangeIcon = makeColoredMarkerIcon('img/marker-icon-orange.svg', 'img/marker-icon-orange.svg');

/*
Green spectrum icons
*/

export const yellowIcon = makeColoredMarkerIcon('img/marker-icon-yellow.svg', 'img/marker-icon-yellow.svg');

/**
 * @deprecated Ambiguous color; use yellowIcon instead.
 */
export const goldIcon = yellowIcon;

export const limeIcon = makeColoredMarkerIcon('img/marker-icon-lime.svg', 'img/marker-icon-lime.svg');

export const greenIcon = makeColoredMarkerIcon('img/marker-icon-green.svg', 'img/marker-icon-green.svg');

export const turquoiseIcon = makeColoredMarkerIcon('img/marker-icon-turquoise.svg', 'img/marker-icon-turquoise.svg');

/*
Blue spectrum icons
*/

export const cyanIcon = makeColoredMarkerIcon('img/marker-icon-cyan.svg', 'img/marker-icon-cyan.svg');

export const blueIcon = defaultIcon;

export const ultramarineIcon = makeColoredMarkerIcon('img/marker-icon-ultramarine.svg', 'img/marker-icon-ultramarine.svg');

export const royalIcon = makeColoredMarkerIcon('img/marker-icon-royal.svg', 'img/marker-icon-royal.svg');

export const violetIcon = makeColoredMarkerIcon('img/marker-icon-violet.svg', 'img/marker-icon-violet.svg');

/*
Greyscale icons
*/

export const whiteIcon = makeColoredMarkerIcon('img/marker-icon-white.svg', 'img/marker-icon-white.svg');

export const lightGreyIcon = makeColoredMarkerIcon('img/marker-icon-light-grey.svg', 'img/marker-icon-light-grey.svg');

export const greyIcon = makeColoredMarkerIcon('img/marker-icon-grey.svg', 'img/marker-icon-grey.svg');

export const darkGreyIcon = makeColoredMarkerIcon('img/marker-icon-dark-grey.svg', 'img/marker-icon-dark-grey.svg');

export const blackIcon = makeColoredMarkerIcon('img/marker-icon-black.svg', 'img/marker-icon-black.svg');

/*
Util/Data functions
*/

/**
 * Returns an object that represents the collection of preset colored icons provided by this library,
 * manually sorted by their hues starting from pink.
 * 
 * Note: this does not include the `defaultIcon`, but does include the `blueIcon`.
 * 
 * Hint: this may be used to randomly pick a colored icon.
 * @returns The colored icons in "icon name -> icon instance" form.
 */
export function getAllPresetColoredIcons()
{
    return {
        pinkIcon: pinkIcon,
        redIcon: redIcon,
        copperIcon: copperIcon,
        orangeIcon: orangeIcon,
        yellowIcon: yellowIcon,
        limeIcon: limeIcon,
        greenIcon: greenIcon,
        turquoiseIcon: turquoiseIcon,
        cyanIcon: cyanIcon,
        blueIcon: blueIcon,
        ultramarineIcon: ultramarineIcon,
        royalIcon: royalIcon,
        violetIcon: violetIcon,
        whiteIcon: whiteIcon,
        lightGreyIcon: lightGreyIcon,
        greyIcon: greyIcon,
        darkGreyIcon: darkGreyIcon,
        blackIcon: blackIcon,
    }
}
