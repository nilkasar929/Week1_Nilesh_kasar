"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretHandshake = exports.isLeapYear = exports.concatenateStrings = exports.splitString = void 0;
//a) Function to split the given string
function splitString(input) {
    return input.split("_").join(" ");
}
exports.splitString = splitString;
//b) Function to concatenate the two strings
function concatenateStrings(param1, param2) {
    return param1 + param2;
}
exports.concatenateStrings = concatenateStrings;
//c) Function to check leap year
//Here i have make a function isLeapYear which checks the given number is leap year or not.
//it returns boolean value
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
exports.isLeapYear = isLeapYear;
/* d) Secret handshake function
In this function first i have create an empty array of actions
The code converts the given number into binary
then it slice the binary code upto 5 digits
Then using for loop transvere through binary code and store actions in actions array
If leftmost digit is 1 then we reverse the actions */
function secretHandshake(number) {
    let binary = number.toString(2);
    const actions = [];
    if (binary.length > 5) {
        binary = binary.slice(-5);
    }
    for (let i = 0; i < binary.length; i++) {
        if (binary[binary.length - 1 - i] === "1") {
            if (i === 0) {
                actions.push("wink");
            }
            else if (i === 1) {
                actions.push("double blink");
            }
            else if (i === 2) {
                actions.push("close your eyes");
            }
            else if (i === 3) {
                actions.push("jump");
            }
            else if (i === 4) {
                actions.reverse();
            }
        }
    }
    return actions;
}
exports.secretHandshake = secretHandshake;
