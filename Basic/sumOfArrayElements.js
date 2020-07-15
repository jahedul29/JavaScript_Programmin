function sumOfArrayElement(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let studentMarks = [50, 65, 12, 30, 60, 50];
console.log(sumOfArrayElement(studentMarks));