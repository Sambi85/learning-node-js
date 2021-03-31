console.log('Hello from Node.js')

const fs = require('fs');
// ES5 syntax ^


fs.writeFileSync('hello.txt', 'Hello from Node.js');
// This will make text files !
// First arguemnt is the file name
// second arguemnt is what's inside that file
