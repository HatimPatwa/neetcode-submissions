class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        console.log(map)
        for(const key in nums){
            let rem =  target - nums[key]
            console.log(rem)
            let a = map.get(rem)
            console.log(a)
            if(a && a !== Number(key)){
                return [Number(key),Number(a)]
            }
            map.set(nums[key],key)
        }
    }


}
