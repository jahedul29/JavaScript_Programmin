// JavaScript program to reverse a string using build in methods

function reverseString(str) {
    return str.split(' ').reverse().join(' ');
}

let speech = "Hi, I am Jahedul Hoque";

console.log(reverseString(speech));