//node imports
const { log, print } = require("./text-helpers");

// function print(message) {
//   log(message, new Date());
// }
// function log(message, timestamp) {
//   console.log(`${timestamp.toString()}: ${message}`);
// }

// const print = (message) => log(message, new Date());
// const log = (message, timestamp) => console.log(`${timestamp.toString()}: ${message}`);

const print(message) => log(message, new Date())
const log(message, timestamp) => console.log(`${timestamp.toString()}: ${message}`)

//node exports
module.exports = { print, log };
