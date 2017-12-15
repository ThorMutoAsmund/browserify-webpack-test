--------------------------------------------------------
Based on this article
https://www.sitepoint.com/javascript-modules-bundling-transpiling/
--------------------------------------------------------

// Install dependencies
npm i

// Install live server 
install -g live-server

// Run live server
live-server

// Build bundle using browserify
npm run browserify

// Build bundle using webpack
npm run webpack

// Transpile example coffeescript file
npm run coffeescript

// Transpile example TS file
npm run tsc

// Transpile example ES6 file
npm run babel


--------------------------------------------------------
To automatically transpile files
--------------------------------------------------------

// Insall webpack globally
npm install -g webpack

// Run webpack to create one bundle
webpack