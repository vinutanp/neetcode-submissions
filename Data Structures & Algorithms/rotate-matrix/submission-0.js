class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let n=matrix.length;
        for(let r=0;r<n-1;r++){
            for(let c=r+1;c<n;c++){
                let temp=matrix[r][c];
                matrix[r][c]=matrix[c][r]
                matrix[c][r]=temp;
            }
        }
        for(let r=0;r<n;r++){
            let left=0;
            let right=n-1
            while(left<right){
                 let temp = matrix[r][left];
            matrix[r][left] = matrix[r][right];
            matrix[r][right] = temp;

            left++;
            right--;
            }
        }
    }
}
