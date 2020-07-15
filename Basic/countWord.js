// JavaScript program to determine number of a word in a string

function countWord(str) {
    let count = 0;
    if (str.length > 0) {
        count = 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ' && str[i - 1] != ' ') {
            count++;
        }
    }
    return count;
}

let speech = "I am Jahedul Hoque. I am a web developer.";
console.log(countWord(speech));