// JavaScript program to produce mirror view of a string

function stringMirror(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(stringMirror("Hi, I am Jahedul"));