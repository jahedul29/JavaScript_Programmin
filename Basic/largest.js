function findLargest(Marks) {
    let largest = studentMarks[0];
    for (let i = 1; i < studentMarks.length; i++) {
        if (studentMarks[i] > largest) {
            largest = studentMarks[i];
        }
    }
    return largest;
}

let studentMarks = [50, 80, 60, 90, 100, 75];
console.log(findLargest(studentMarks));