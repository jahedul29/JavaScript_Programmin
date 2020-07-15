//* Max of two value

function max(a, b, c = 0) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}
result = max(5, 6);

result

console.log(max(5, 6, 10));