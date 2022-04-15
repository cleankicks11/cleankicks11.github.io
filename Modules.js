// -- IIFE --
// wrap function in () to make item be evaluated ten call at the end
//Avoid poluting global namespace

var myApp = {}

(function(){
    myApp.add = function(a, b) {
        return a + b;
  }
})();

// -- CommmonJs + Browserify ---

module.exports = function add(a, b) {
     return a+b;
}

var add = require("./add");

----ES6 - Webpack2 ---

export const add = (a, b) => a + b;

export default function add() {
    return a + b;
}

import { add } from './add';

import add from './add';

// -- webpack --

module.exports = {
    entry: './add/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}


