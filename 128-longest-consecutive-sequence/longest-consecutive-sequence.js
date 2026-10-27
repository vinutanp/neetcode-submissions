/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set=new Set()

    for(let i=0;i< nums.length;i++){
        set.add(nums[i])
    }
    let longest=0
     for (let num of set){
        
        if(!set.has(num-1)){
            let current=num;
            let curStreak=1
            while(set.has(current+1)){
                current++
                curStreak++
            }
longest=Math.max(longest,curStreak)
        }
        
        
     }
     return longest
     
    
};