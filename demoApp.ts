/*
Reference: https://stackoverflow.com/questions/50132531/bundle-leaflet-for-use-in-browser

As a demo, and to test this library really works, we have this demo webpage. More info in the README.
*/

// showcase our markers: create a ring of our markers on the map
const centerLat = 51.5;
const centerLng = 0;
const coordRadius = 0.015;

// require modules
import * as L from 'leaflet';
// create map
const map = L.map('map').setView([centerLat, centerLng], 13);

// Use OpenStreetMap tiles and attribution
const osmTiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '© OpenStreetMap contributors';

// Create the basemap and add it to the map
L.tileLayer(osmTiles, {
    maxZoom: 18,
    attribution: attribution
}).addTo(map);

// how many icons?
import { getAllPresetColoredIcons } from './src/index.js';
const icons = getAllPresetColoredIcons();
const iconCount = Object.keys(icons).length;

// also prepare calibration markers for each marker to ensure our pins are anchored correctly
const calibrationIcon = L.icon({
    // a small red square
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InJlZCIvPjwvc3ZnPg==',
    iconSize: [4, 4],
    iconAnchor: [2, 2],
});

// draw the circle, clockwise from 12
let progress = 0;
for (const [key, value] of Object.entries(icons)) {
    const circleProgress = 2 * Math.PI * progress / iconCount;
    const deltaX = Math.sin(circleProgress) * coordRadius;
    const deltaY = Math.cos(circleProgress) * coordRadius;

    // create the calibration marker first to be placed at the bottom
    const bullseye = L.marker([centerLat + deltaY, centerLng + deltaX * 1.6], {icon: calibrationIcon});
    bullseye.addTo(map);

    // create the color marker
    // hand compensate for the longitude
    const marker = L.marker([centerLat + deltaY, centerLng + deltaX * 1.6], {icon: value});
    marker.bindTooltip(key);
    marker.bindPopup(key);
    marker.addTo(map);

    progress++;
}
