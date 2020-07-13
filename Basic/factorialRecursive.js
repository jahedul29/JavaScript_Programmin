// JavaScript program to find the factorial using recursion

function factorialRecursive(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorialRecursive(num - 1);
    }
}

console.log(factorialRecursive(4));