// JavaScript program to remove the duplicate of an array

function removeDuplicate(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) < 0) {
            temp.push(array[i]);
        }
    }
    return temp;
}

var numbers = [20, 30, 25, 23, 55, 30, 55, 60, 45, 60, 70, 60, 25];
console.log(removeDuplicate(numbers));