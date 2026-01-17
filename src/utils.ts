import * as L from 'leaflet';

const iconSize = [25, 41] as L.PointTuple;
const iconAnchor = [12, 41] as L.PointTuple;
const popupAnchor = [1, -34] as L.PointTuple;
const tooltipAnchor = [16, -28] as L.PointTuple;
const shadowSize = [41, 41] as L.PointTuple;

export function makeColoredMarkerIcon(iconUrl: string, iconRetinaUrl: string) {
    return new L.Icon({
        iconUrl: iconUrl,
        iconRetinaUrl: iconRetinaUrl,
        shadowUrl: 'img/marker-shadow.png',
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor,
        tooltipAnchor: tooltipAnchor,
        shadowSize: shadowSize
    });
}
