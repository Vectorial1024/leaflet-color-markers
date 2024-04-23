/*
Reference: https://stackoverflow.com/questions/50132531/bundle-leaflet-for-use-in-browser

As a demo, and to test this library really works, we have this webpage test directory.

To build the bundle in case dist/bundle.js does not exist, run: 
npm run build-test

To view the final result, see:
index.html
*/

// require modules
import * as L from 'leaflet/src/Leaflet';
// const L = require('leaflet');
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
import { blueIcon } from './js/leaflet-color-markers.js'; 
// import * as LCM from './js/leaflet-color-markers.js';
// const LCM = require('./js/leaflet-color-markers.js');
// const blueIcon = LCM.blueIcon;

// create and customize our marker
const marker = L.marker([51.5, -0.09], { icon: blueIcon });
marker.bindTooltip("Somewhere in London");
// and then add it to the map
marker.addTo(map);
