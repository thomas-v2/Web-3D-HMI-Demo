// postinstall.js
const fs = require('fs');

var files = [
{
    "src": "./node_modules/three/build/three.js",
    "dst": "./public/js/three.js"
}, {
    "src": "./node_modules/three/build/three.module.js",
    "dst": "./public/js/three.module.js"
}, {
    "src": "./node_modules/three/examples/js/loaders/OBJLoader.js",
    "dst": "./public/js/OBJLoader.js"
}, {
    "src": "./node_modules/three/examples/js/controls/TrackballControls.js",
    "dst": "./public/js/TrackballControls.js"
}, {
    "src": "./node_modules/three/examples/js/libs/dat.gui.min.js",
    "dst": "./public/js/dat.gui.min.js"
}];


for (var i = 0; i < files.length; i++) {
    console.log("Copy '" + files[i].src + "' to '" + files[i].dst + "'.");
    fs.copyFile(files[i].src, files[i].dst, (err) => {
        if (err) throw err;
    });
}