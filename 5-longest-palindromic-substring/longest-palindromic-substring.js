/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = '';
    function expand(left, right) {
        while (left >= 0 &&
            right < s.length && s[left] === s[right]) {
            right++
            left--
        }
        return s.substring(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        let even = expand(i, i + 1);

        if (odd.length > result.length) {
            result = odd
        }

        if (even.length > result.length) [
            result=even
        ]
    }
    return result;

};