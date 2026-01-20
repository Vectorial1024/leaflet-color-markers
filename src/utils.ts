import * as L from 'leaflet';

const iconSize = [26, 41] as L.PointTuple;
const iconAnchor = [13, 40] as L.PointTuple;
const popupAnchor = [0, -34] as L.PointTuple;
const tooltipAnchor = [16, -27] as L.PointTuple;
const shadowSize = [40, 42] as L.PointTuple;

import iconSvg from '../img/marker-icon.svg';
import shadowSvg from '../img/marker-shadow.svg';

export function makeColoredMarkerIcon(iconUrl: string, iconRetinaUrl: string) {
    return new L.Icon({
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

export function makeColoredMarkerSvgIcon() {
    return new L.Icon({
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
