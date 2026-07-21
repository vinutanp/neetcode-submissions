class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       const n = nums.length;

        let leftarr = new Array(n);
        let rightarr = new Array(n);
        let out = new Array(n);

        // Left products
        leftarr[0] = 1;
        for (let i = 1; i < n; i++) {
            leftarr[i] = leftarr[i - 1] * nums[i - 1];
        }

        // Right products
        rightarr[n - 1] = 1;
        for (let i = n - 2; i >= 0; i--) {
            rightarr[i] = rightarr[i + 1] * nums[i + 1];
        }

        // Final answer
        for (let i = 0; i < n; i++) {
            out[i] = leftarr[i] * rightarr[i];
        }

        return out;
    }
}
