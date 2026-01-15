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
    onwarn(warning, warn) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') {
            // Leaflet 1 is constructed circularly, this is normal
            return;
        }
        if (warning.code === 'MISSING_EXPORT') {
            // Leaflet 1 works by doing `export.x = x`, this is normal
            return;
        }
        if (warning.code === 'THIS_IS_UNDEFINED') {
            // Leaflet 1 is not using legacy class syntax and therefore manually binds to `this`, this is normal
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
    ]
};
