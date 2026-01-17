/*
Reference: https://stackoverflow.com/questions/50132531/bundle-leaflet-for-use-in-browser

As a demo, and to test this library really works, we have this demo webpage. More info in the README.
*/

// require modules
import * as L from 'leaflet/src/Leaflet';
// create map
const map = L.map('map').setView([51.505, -0.09], 13);

// Use OpenStreetMap tiles and attribution
const osmTiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '© OpenStreetMap contributors';

// Create the basemap and add it to the map
L.tileLayer(osmTiles, {
    maxZoom: 18,
    attribution: attribution
}).addTo(map);

// load icon with our library
import { greenIcon } from './src/index.js';

// create and customize our marker
const marker = L.marker([51.5, -0.09], { icon: greenIcon });
marker.bindTooltip("Somewhere in London");
// and then add it to the map
marker.addTo(map);
