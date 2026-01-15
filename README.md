# leaflet-color-markers

[![npm version](https://img.shields.io/npm/v/%40vectorial1024%2Fleaflet-color-markers)](https://www.npmjs.com/package/@vectorial1024/leaflet-color-markers)
[![npm downloads](https://img.shields.io/npm/dw/%40vectorial1024%2Fleaflet-color-markers)](https://www.npmjs.com/package/@vectorial1024/leaflet-color-markers)
[![github link](https://img.shields.io/badge/GitHub-repo-green?logo=github)](https://github.com/Vectorial1024/leaflet-color-markers)
[![github stars](https://img.shields.io/github/stars/vectorial1024/leaflet-color-markers)](https://github.com/Vectorial1024/leaflet-color-markers/stargazers)
[![github forks](https://img.shields.io/github/forks/vectorial1024/leaflet-color-markers)](https://github.com/Vectorial1024/leaflet-color-markers/forks)

The standard Leaflet marker icon, but in different color variations, for simple use cases.

This is a modernized fork of [patrickp-rthinfo/leaflet-color-markers](https://github.com/patrickp-rthinfo/leaflet-color-markers),
which is in turn a fork of [pointhi/leaflet-color-markers](https://github.com/pointhi/leaflet-color-markers).
With this, the first commit to this project can be traced back to late 2013.

Note that the Leaflet marker icon is [originally contributed to the Leaflet project](https://github.com/Leaflet/Leaflet/blob/main/src/images/marker.svg), and is not the work of this library. The work here is to make that marker icon available in more colors.

## Install

via NPM:

```
npm install @vectorial1024/leaflet-color-markers
```

### Special Notice

This library is a successor of [leaflet-color-markers](https://www.npmjs.com/package/leaflet-color-markers). That NPM library, for the lack of better words, actually does nothing.

## Demo

A demo is included in the same repo. It showcases a simple Leaflet map with a colored marker from this package.

You may try it locally with the following steps:

1. Clone this repo
2. `npm run build-demo`
3. Open `demo.html` in your internet browser
4. See a minimally usable Leaflet map with a colored marker in it

![demo image](https://github.com/Vectorial1024/leaflet-color-markers/assets/17726797/1a542920-c29e-40d3-9e08-9b27c83da50b)

## Example Code

Add a simple marker using the green icon template to a Leaflet map: 

```javascript
import { greenIcon } from "@vectorial1024/leaflet-color-markers";

// we assume the map is already defined
const map = L.map('theMap');

L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);
```

### What about `require()`?

**As of `3.0.0`, support for CJS (`require()`) has been removed.** We strongly recommend you migrate to use the standard ESM style (`import`, available since 2018) to handle dependencies.

For `2.x`, if CJS (`require()`) is required, you can still do this:

```javascript
// require() also works, but we recommend using the import if possible
const LCM = require("@vectorial1024/leaflet-color-markers");
const greenIcon = LCM.greenIcon;
```

## Colors

### Preset Colors

| Color | Marker | Color Inside | Color Outside |
| ------------- |:-----:|:-----:|:-----:|
| Blue | ![Marker Blue](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-blue.png) | #2A81CB | #3274A3 |
| Gold | ![Marker Gold](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-gold.png) | #FFD326 | #C1A32D |
| Red | ![Marker Red](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-red.png) | #CB2B3E | #982E40 |
| Green | ![Marker Green](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-green.png) | #2AAD27 | #31882A |
| Orange | ![Marker Orange](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-orange.png) | #CB8427 | #98652E |
| Yellow | ![Marker Yellow](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-yellow.png) | #CAC428 | #988F2E |
| Violet | ![Marker Violet](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-violet.png) | #9C2BCB | #742E98 |
| Grey | ![Marker Grey](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-grey.png) | #7B7B7B | #6B6B6B |
| Black | ![Marker Black](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-black.png) | #3D3D3D | #313131 |
