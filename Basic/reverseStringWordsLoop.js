// JavaScript program to reverse the words of a string using For Loop

function reverseString(str) {
    let reverse = "";
    let word = "";
    for (let i = 0; i < str.length; i++) {
        word += str[i];
        if (str[i] == " ") {
            reverse = word + reverse;
            word = "";
        }
        if (i == str.length - 1) {
            reverse = word + ' ' + reverse;
            reverse = reverse.slice(0, i + 1);
        }
    }
    return reverse;
}

let speech = "Hi I am Jahedul Hoque";

console.log(reverseString(speech));