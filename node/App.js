// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
const names = require('./node-express-course-main/01-node-tutorial/04-names.js')
const sayHi = require('./node-express-course-main/01-node-tutorial/05-utils.js')
const data = require('./node-express-course-main/01-node-tutorial/06-alternative-flavor.js')
require('./node-express-course-main/01-node-tutorial/07-mind-grenade.js')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
/*
setInterval(() => {
  console.log('hello world')
}, 1000)
*/

