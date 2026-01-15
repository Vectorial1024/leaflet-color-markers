/*
note: "circular reference in leaflet" warning is harmless because that is how leaflet was made; ref https://github.com/Leaflet/Leaflet/issues/5968
*/

import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
	input: 'demoApp.js',
	output: [
		{
			file: 'dist/demoBundle.js',
			format: 'es',
		}
	],
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
        }),

        json(),
    ]
};
