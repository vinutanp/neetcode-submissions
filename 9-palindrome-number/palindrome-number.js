/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
    return false;
}

let rem = x;
let res = 0;

while (rem > 0) {
    let digit = rem % 10;
    res = res * 10 + digit;
    rem = Math.floor(rem / 10);
}

return res === x;

    
};