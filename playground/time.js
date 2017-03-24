var moment = require('moment');

var date = moment();

console.log(date.format('h:mm a'));
// var date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM Do, YYYY'));

//var createdAt = new Date().getTime();
var createdAt = moment().valueOf();
var date = moment(createdAt);
console.log(date.format('h:mm a'));



// var date = new Date();
// console.log(date.getMonth());