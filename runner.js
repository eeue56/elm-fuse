const fs = require('fs');
const compiler = require('node-elm-compiler').compileSync;
const mainFile = "example/Main.elm";
const watch = require('node-watch');
var elm = require('./elm-fuse/elm.js');
var app = elm.Main.worker();

const compile = () => {
  compiler(mainFile, {output: "elm-fuse/elm.js"});

  app.ports.sendUxl.subscribe(function(uxl){
    fs.writeFileSync('./elm-fuse/MainView.ux', uxl);
  });
};

compile();

// Now let's watch for elm file changes and recompile whenever that happens.
let filter = (pattern, fn) => {
  return (evt, name) => {
    console.log(name);
    if (pattern.test(name)) {
      fn.apply(null, arguments);
    }
  }
}

watch('./example', filter(/\.elm$/, () => {
  compiler(mainFile, {output: "elm-fuse/elm.js"});

  app.ports.requestSendUxl.send()
}));
