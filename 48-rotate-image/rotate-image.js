/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n= matrix.length;
    for(let r=0;r<n-1;r++){
        for(let c=r+1;c<n;c++){
            let tmp=matrix[r][c]
            matrix[r][c]=matrix[c][r]
            matrix[c][r]=tmp
        }
    }  
    for (let r = 0; r < n; r++) {
        let left = 0;
        let right = n - 1;

        while (left < right) {
            let temp = matrix[r][left];
            matrix[r][left] = matrix[r][right];
            matrix[r][right] = temp;

            left++;
            right--;
        }
    }
};