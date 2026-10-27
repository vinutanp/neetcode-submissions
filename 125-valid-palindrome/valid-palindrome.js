/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleantext = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left=0;
    let right=cleantext.length-1;
    while(left<right){
        if(cleantext.charAt(left)!=cleantext.charAt(right)){
            return false
        }
        left++
        right--

    }
    return true


    
};