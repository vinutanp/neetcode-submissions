/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);//now we have the count of each elem
    }

    const bucket=Array.from({length:nums.length+1}, ()=>[]);

    for (const [num, count] of map) {
        bucket[count].push(num);
    }

let result=[];
    for(let i=bucket.length-1;i>=0;i--){
        if (bucket[i].length > 0){ 
            for(const num of bucket[i]){
                result.push(num);
                if(result.length === k){
                    return result;
                }
            }
        }
    }

    return result;




    
};