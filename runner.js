const fs = require('fs');
const compiler = require('node-elm-compiler').compileSync;

const mainFile = "example/Main.elm";

compiler(mainFile, {output: "elm-fuse/elm.js"});

var elm = require('./elm-fuse/elm.js');

var app = elm.Main.worker();

app.ports.sendUxl.subscribe(function(uxl){
	fs.writeFileSync('./elm-fuse/MainView.ux', uxl);
});

