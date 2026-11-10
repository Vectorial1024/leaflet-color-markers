# leaflet-color-markers

[![npm version](https://img.shields.io/npm/v/%40vectorial1024%2Fleaflet-color-markers)](https://www.npmjs.com/package/@vectorial1024/leaflet-color-markers)
[![npm downloads](https://img.shields.io/npm/dw/%40vectorial1024%2Fleaflet-color-markers)](https://www.npmjs.com/package/@vectorial1024/leaflet-color-markers)
[![github link](https://img.shields.io/badge/GitHub-repo-green?logo=github)](https://github.com/Vectorial1024/leaflet-color-markers)
[![github stars](https://img.shields.io/github/stars/vectorial1024/leaflet-color-markers)](https://github.com/Vectorial1024/leaflet-color-markers/stargazers)
[![github forks](https://img.shields.io/github/forks/vectorial1024/leaflet-color-markers)](https://github.com/Vectorial1024/leaflet-color-markers/forks)
[![typescript](https://img.shields.io/badge/TypeScript-yes-blue?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript)

The standard Leaflet marker icon, but in different color variations, for simple use cases.

> [!WARNING]
> As of Leaflet 2, this package is DEPRECATED, and this repository is ARCHIVED.
> 
> You should migrate to use Leaflet 2's `DefaultIcon`. See below for more details.

This is a modernized fork of [patrickp-rthinfo/leaflet-color-markers](https://github.com/patrickp-rthinfo/leaflet-color-markers),
which is in turn a fork of [pointhi/leaflet-color-markers](https://github.com/pointhi/leaflet-color-markers).
With this, the first commit to this project can be traced back to late 2013.

Note that the Leaflet marker icon is [originally contributed to the Leaflet project](https://github.com/Leaflet/Leaflet/blob/main/src/images/marker-icon.svg),
and is not the work of this library.
The work here is to make that colored marker icon available in some additional colors for easier simple multi-color marker usages.

## Deprecation and Migration

As of Leaflet 2, it is now possible to customize the color of the default marker, which is normally bluish, by specifying a CSS color while defining the icon. (https://github.com/Leaflet/Leaflet/pull/10489)

Example code in Leaflet 2:

```js
// we assume the map is properly defined and created
var map = new LeafletMap();

// define the colored marker icon, for efficient reuse
// 'crimson' is one of the many CSS named colors
// note that it is also possible to supply a CSS rgb color, e.g. 'rgb(220 20 60)', instead of 'crimson'
var crimson = new DefaultIcon({color: 'crimson'});

// then, create a crimson-colored marker and put it into the map
new Marker([0, 0], {icon: crimsonIcon}).addTo(map);
```

Compared to this package, the Leaflet 2 markers do not have the "luster" on them,
but can be easily recolored to any of the expressible CSS colors.
They also have clearer borders compared to this package.

Leaflet 2 also has built-in TypeScript support. (https://github.com/Leaflet/Leaflet/issues/7591)

The benefits of switching over to Leaflet 2 is very significant.

### What about `4.0.0` of this package?

In `4.0.0`, this package is updated to be compatible with Leaflet 2, for seamless migration:
- The icons now have the Leaflet 2 type `DefaultIcon` for the recoloring
- The icons are visually similar to the pre-update icons
- The icons are marked as `@deprecated`

The deprecation message indicates which RGB is visually close to the legacy icons.
You may perhaps review the CSS preset colors and choose which one is more suitable for your design.

## Install

via NPM:

```
npm install @vectorial1024/leaflet-color-markers
```

✔️ TypeScript definitions available as of `3.0.0`.

### Special Notice

This library is a successor of [leaflet-color-markers](https://www.npmjs.com/package/leaflet-color-markers). In particular, this library supports modern NodeJS `import` syntax, which is not supported by that library.

## Demo

A demo is included in the same repo. It showcases a simple Leaflet map with colored markers from this package.

You may try it locally with the following steps:

1. Clone this repo
2. `npm run build-demo`
3. Open `demo.html` in your internet browser
4. See a minimally usable Leaflet map with a ring of colored markers in it

![demo image](https://github.com/user-attachments/assets/3685bfca-6caf-4cdc-b0cc-5d6e80ca07c6)

## Example Code

Add a simple marker using the green icon template to a Leaflet map: 

```javascript
import { greenIcon } from "@vectorial1024/leaflet-color-markers";

// we assume the map is already defined
const map = L.map('theMap');

L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);
```

**No extra CSS mess**; it just works!

It even works with existing NodeJS frameworks very easily:

### React Example with `react-leaflet`

```javascript
import { greenIcon } from '@vectorial1024/leaflet-color-markers';

return (
    <MapContainer>
        <Marker position={[51.505, -0.09]} icon={greenIcon} />
    </MapContainer>
)
```

### Angular Example with `@bluehalo/ngx-leaflet`

```javascript
import { Component } from '@angular/core';
import { greenIcon } from '@vectorial1024/leaflet-color-markers';

@Component({
    imports: [LeafletDirective, LeafletLayersDirective],
})
export class AngularLeafletDemoMap {
    layers = [
        L.marker([51.505, -0.09], {
            icon: greenIcon
        })
    ];
}

```

### Vue 3 Example with `@vue-leaflet/vue-leaflet`

```vue
<script setup>
import { greenIcon } from '@vectorial1024/leaflet-color-markers';
</script>

<template>
    <l-map>
        <l-marker :lat-lng="[51.505, -0.09]" :icon="greenIcon" />
    </l-map>
</template>
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

Note that some preset color names are reassigned during the `2.x` to `3.x` upgrade.

| Legacy Name | Current Name | Preview | Color Availability | Notes |
|:-----------:|:------------:|:-------:|:------------:|-------|
| N/A | `defaultIcon` | <img src="img/marker-icon.svg" alt="Default Marker" height="40" /> | `3.0.0` | Default color of the Leaflet marker |
| N/A | `pinkIcon` | <img src="img/marker-icon-pink.svg" alt="Pink Marker" height="40" /> | `3.0.0` | - |
| `redIcon` | `redIcon` | <img src="img/marker-icon-red.svg" alt="Red Marker" height="40" /> | `2.0.0` | - |
| `orangeIcon` | `copperIcon` | <img src="img/marker-icon-copper.svg" alt="Copper Marker" height="40" /> | `2.0.0` | **Reassigned** because not actually orange |
| N/A | `orangeIcon` | <img src="img/marker-icon-orange.svg" alt="Orange Marker" height="40" /> | `3.0.0` | **Recolored** for color accuracy |
| `goldIcon` | N/A | N/A | **Deprecated** | Ambiguous color; use `yellowIcon` instead |
| `yellowIcon` | `yellowIcon` | <img src="img/marker-icon-yellow.svg" alt="Yellow Marker" height="40" /> | `2.0.0` | **Recolored** for color accuracy |
| N/A | `limeIcon` | <img src="img/marker-icon-lime.svg" alt="Lime Marker" height="40" /> | `3.0.0` | - |
| `greenIcon` | `greenIcon` | <img src="img/marker-icon-green.svg" alt="Green Marker" height="40" /> | `2.0.0` | - |
| N/A | `turquoiseIcon` | <img src="img/marker-icon-turquoise.svg" alt="Turquoise Marker" height="40" /> | `3.0.0` | - |
| N/A | `cyanIcon` | <img src="img/marker-icon-cyan.svg" alt="Cyan Marker" height="40" /> | `3.0.0` | - |
| `blueIcon` | `blueIcon` | <img src="img/marker-icon.svg" alt="Blue Marker" height="40" /> | `2.0.0` | - |
| N/A | `ultramarineIcon` | <img src="img/marker-icon-ultramarine.svg" alt="Ultramarine Marker" height="40" /> | `3.0.0` | - |
| N/A | `royalIcon` | <img src="img/marker-icon-royal.svg" alt="Royal Marker" height="40" /> | `3.0.0` | - |
| `violetIcon` | `violetIcon` | <img src="img/marker-icon-violet.svg" alt="Violet Marker" height="40" /> | `2.0.0` | - |
| N/A | `whiteIcon` | <img src="img/marker-icon-white.svg" alt="White Marker" height="40" /> | `3.0.0` | - |
| N/A | `lightGreyIcon` | <img src="img/marker-icon-light-grey.svg" alt="Light Grey Marker" height="40" /> | `3.0.0` | - |
| `greyIcon` | `greyIcon` | <img src="img/marker-icon-grey.svg" alt="Grey Marker" height="40" /> | `2.0.0` | - |
| `blackIcon` | `darkGreyIcon` | <img src="img/marker-icon-dark-grey.svg" alt="Dark Grey Marker" height="40" /> | `2.0.0` | **Reassigned** because not actually black |
| N/A | `blackIcon` | <img src="img/marker-icon-black.svg" alt="Black Marker" height="40" /> | `3.0.0` | **Recolored** for color accuracy |
