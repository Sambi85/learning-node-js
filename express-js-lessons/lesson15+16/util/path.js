// helper function for navigation! seperation of concerns! 

const path = require('path');

module.exports = path.dirname(require.main.filename);
// global --> require
// main = property of require, it's the  main module that started application/ app.js ! 
// filename = property of mainModule, will show us which file was the mainModule