# leaflet-color-markers

[![npm version](https://img.shields.io/npm/v/%40vectorial1024%2Fleaflet-color-markers)](https://www.npmjs.com/package/@vectorial1024/leaflet-color-markers)
[![npm downloads](https://img.shields.io/npm/dw/%40vectorial1024%2Fleaflet-color-markers)](https://www.npmjs.com/package/@vectorial1024/leaflet-color-markers)
[![github link](https://img.shields.io/badge/GitHub-repo-green?logo=github)](https://github.com/Vectorial1024/leaflet-color-markers)
[![github stars](https://img.shields.io/github/stars/vectorial1024/leaflet-color-markers)](https://github.com/Vectorial1024/leaflet-color-markers/stargazers)
[![github forks](https://img.shields.io/github/forks/vectorial1024/leaflet-color-markers)](https://github.com/Vectorial1024/leaflet-color-markers/forks)
[![typescript](https://img.shields.io/badge/TypeScript-yes-blue?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript)

The standard Leaflet marker icon, but in different color variations, for simple use cases.

This is a modernized fork of [patrickp-rthinfo/leaflet-color-markers](https://github.com/patrickp-rthinfo/leaflet-color-markers),
which is in turn a fork of [pointhi/leaflet-color-markers](https://github.com/pointhi/leaflet-color-markers).
With this, the first commit to this project can be traced back to late 2013.

Note that the Leaflet marker icon is [originally contributed to the Leaflet project](https://github.com/Leaflet/Leaflet/blob/main/src/images/marker-icon.svg),
and is not the work of this library.
The work here is to make that colored marker icon available in some additional colors for easier simple multi-color marker usages.

## Install

via NPM:

```
npm install @vectorial1024/leaflet-color-markers
```

✔️ TypeScript definitions available as of `3.0.0`.

### Special Notice

This library is a successor of [leaflet-color-markers](https://www.npmjs.com/package/leaflet-color-markers). In particular, this library supports modern NodeJS `import` syntax, which is not supported by that library.

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

The color table for `3.x`.

Note that some preset colors are changed during the `2.x` to `3.x` upgrade.

| Legacy Name | Current Name | Preview | Availability | Notes |
|:-----------:|:------------:|:-------:|:------------:|:-----:|
| N/A | `defaultIcon` | <img src="img/marker-icon.svg" alt="Default Marker" height="40" /> | `3.0.0` | Default color of the Leaflet marker |
| `blueIcon` | `blueIcon` | <img src="img/marker-icon.svg" alt="Blue Marker" height="40" /> | `2.0.0` | - |
| `goldIcon` | `goldIcon` | ![Marker Gold](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-gold.png) | `2.0.0` | - |
| `redIcon` | `redIcon` | ![Marker Red](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-red.png) | `2.0.0` | - |
| `greenIcon` | `greenIcon` | ![Marker Green](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-green.png) | `2.0.0` | - |
| `orangeIcon` | `orangeIcon` | ![Marker Orange](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-orange.png) | `2.0.0` | - |
| `yellowIcon` | `yellowIcon` | ![Marker Yellow](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-yellow.png) | `2.0.0` | - |
| `violetIcon` | `violetIcon` | ![Marker Violet](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-violet.png) | `2.0.0` | - |
| `greyIcon` | `greyIcon` | ![Marker Grey](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-grey.png) | `2.0.0` | - |
| `blackIcon` | `blackIcon` | ![Marker Black](https://raw.githubusercontent.com/Vectorial1024/leaflet-color-markers/master/img/marker-icon-black.png) | `2.0.0` | - |
