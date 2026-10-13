class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(const key in nums){
            let rem =  target - nums[key]
            let a = map.get(rem)
            if(a && a !== Number(key)){
                return [Number(key),Number(a)]
            }
            map.set(nums[key],key)
        }
    }


}
