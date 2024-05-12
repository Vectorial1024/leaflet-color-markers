/*
note: "circular reference in leaflet" warning is harmless because that is how leaflet was made; ref https://github.com/Leaflet/Leaflet/issues/5968
*/

import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
	input: 'js/index.js',
	output: [
		{
			file: 'dist/bundle.js',
			format: 'umd',
            name: "LeafletColorMarkers"
		}
	],
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
        }),

        commonjs({
            include: "node_mmodules/**"
        }),

        json(),
    ]
};
