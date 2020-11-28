const Utility = require('./Utility');
let readlineSync = require('readline-sync')
let element = readlineSync.question("Enter the element:");
Utility.enqueue(element);
