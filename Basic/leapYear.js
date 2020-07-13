// Program to find a year is LeapYear or not

function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 == 0) {
        return true;
    } else if (year % 400) {
        return true;
    } else {
        return false;
    }
}

let year = 1700;

if (isLeapYear(year)) {
    console.log('This year is a Leap Year.');
} else {
    console.log('This year is not a Leap Year.');
}