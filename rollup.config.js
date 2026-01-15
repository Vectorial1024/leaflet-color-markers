/*
note: "circular reference in leaflet" warning is harmless because that is how leaflet was made; ref https://github.com/Leaflet/Leaflet/issues/5968
*/

import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
            sourcemap: true,
        }
    ],
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
        }),

        json(),

        typescript(),
    ]
};
