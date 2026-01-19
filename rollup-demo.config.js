/*
note: "circular reference in leaflet" warning is harmless because that is how leaflet was made; ref https://github.com/Leaflet/Leaflet/issues/5968
*/

import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import url from "@rollup/plugin-url";

export default {
    input: 'demoApp.js',
    output: [
        {
            file: 'dist/demoBundle.js',
            format: 'es',
            sourcemap: true,
        }
    ],
    onwarn(warning, warn) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') {
            // Leaflet 1 is constructed circularly, this is normal
            return;
        }
        warn(warning);
    },
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
        }),

        json(),

        typescript(),

        // requried to correctly understand Leaflet legacy exporting/class syntax
        commonjs(),

        // required to correctly bundle the svgs
        url(),
    ]
};
