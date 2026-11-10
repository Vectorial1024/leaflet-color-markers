import { makeColoredMarkerIcon } from './utils.js';
import { DefaultIcon } from 'leaflet';

/**
 * @deprecated Use Leaflet 2 built-in default icon instead.
 */
export const defaultIcon = new DefaultIcon();

/*
Red spectrum icons
*/

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(254 85 145)'})`.
 */
export const pinkIcon = new DefaultIcon({color: 'rgb(254 85 145)'});

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(214 0 5)'})`.
 */
export const redIcon = new DefaultIcon({color: 'rgb(214 0 5)'});

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(197 102 18)'})`.
 */
export const copperIcon = new DefaultIcon({color: 'rgb(197 102 18)'});

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(254 159 9)'})`.
 */
export const orangeIcon = new DefaultIcon({color: 'rgb(254 159 9)'});

/*
Green spectrum icons
*/

import yellowSvg from '../img/marker-icon-yellow.svg';
export const yellowIcon = makeColoredMarkerIcon(yellowSvg, yellowSvg);

/**
 * @deprecated Ambiguous color; use yellowIcon instead.
 */
export const goldIcon = yellowIcon;

import limeSvg from '../img/marker-icon-lime.svg';
export const limeIcon = makeColoredMarkerIcon(limeSvg, limeSvg);

import greenSvg from '../img/marker-icon-green.svg';
export const greenIcon = makeColoredMarkerIcon(greenSvg, greenSvg);

import turquoiseSvg from '../img/marker-icon-turquoise.svg';
export const turquoiseIcon = makeColoredMarkerIcon(turquoiseSvg, turquoiseSvg);

/*
Blue spectrum icons
*/

import cyanSvg from '../img/marker-icon-cyan.svg';
export const cyanIcon = makeColoredMarkerIcon(cyanSvg, cyanSvg);

/**
 * @deprecated Use Leaflet 2 built-in default icon instead.
 */
export const blueIcon = defaultIcon;

import ultramarineSvg from '../img/marker-icon-ultramarine.svg';
export const ultramarineIcon = makeColoredMarkerIcon(ultramarineSvg, ultramarineSvg);

import royalSvg from '../img/marker-icon-royal.svg';
export const royalIcon = makeColoredMarkerIcon(royalSvg, royalSvg);

import violetSvg from '../img/marker-icon-violet.svg';
export const violetIcon = makeColoredMarkerIcon(violetSvg, violetSvg);

/*
Greyscale icons
*/

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(255 255 255)'})`, aka `{color: 'white'}`.
 */
export const whiteIcon = new DefaultIcon({color: 'white'});

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(205 205 205)'})`.
 */
export const lightGreyIcon = new DefaultIcon({color: 'rgb(205 205 205)'});

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(142 142 142)'})`
 */
export const greyIcon = new DefaultIcon({color: 'rgb(142 142 142)'});

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(78 78 78)'})`
 */
export const darkGreyIcon = new DefaultIcon({color: 'rgb(78 78 78)'});

/**
 * @deprecated Use Leaflet 2 `new DefaultIcon({color: 'rgb(0, 0, 0)'})`, aka `{color: 'black'}`.
 */
export const blackIcon = new DefaultIcon({color: 'black'});

/*
Util/Data functions
*/

/**
 * @deprecated Entire package is deprecated; you should implement a replacement by yourselves.
 * 
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
    console.warn("@vectorial1024/leaflet-color-markers is deprecated. Check the `@deprecated` JSDoc for next steps.");
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
