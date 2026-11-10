import { Icon } from 'leaflet';
import type { PointTuple } from 'leaflet';

const iconSize = [26, 41] as PointTuple;
const iconAnchor = [13, 40] as PointTuple;
const popupAnchor = [0, -34] as PointTuple;
const tooltipAnchor = [16, -27] as PointTuple;
const shadowSize = [40, 42] as PointTuple;

import iconSvg from '../img/marker-icon.svg';
import shadowSvg from '../img/marker-shadow.svg';

/**
 * @deprecated Entire package is deprecated; do not use.
 * @param iconUrl 
 * @param iconRetinaUrl 
 * @returns 
 */
export function makeColoredMarkerIcon(iconUrl: string, iconRetinaUrl: string) {
    console.warn("@vectorial1024/leaflet-color-markers is deprecated. Check the `@deprecated` JSDoc for next steps.");
    return new Icon({
        iconUrl: iconUrl,
        iconRetinaUrl: iconRetinaUrl,
        shadowUrl: shadowSvg,
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor,
        tooltipAnchor: tooltipAnchor,
        shadowSize: shadowSize
    });
}

/**
 * @deprecated Entire package is deprecated; do not use.
 * @returns 
 */
export function makeColoredMarkerSvgIcon() {
    console.warn("@vectorial1024/leaflet-color-markers is deprecated. Check the `@deprecated` JSDoc for next steps.");
    return new Icon({
        iconUrl: iconSvg,
        // with svg as the icon, no particular need to specify retina url
        shadowUrl: shadowSvg,
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor,
        tooltipAnchor: tooltipAnchor,
        shadowSize: shadowSize
    });
}
