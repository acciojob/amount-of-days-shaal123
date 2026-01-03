//your JS code here. If required.
function daysOfAYear(year) {
    // Leap year logic
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    }
    return 365;
}

// do not change the code below
let year = prompt("Enter a year:");
alert(daysOfAYear(Number(year)));

