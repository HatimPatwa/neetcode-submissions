class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            //is there any index that needs me?
            if (map.has(num)) {
                return [map.get(num), i];
            }


            // which index needs the diff
            const diff = target - num;
            map.set(diff, i);
        }

        return [];
    }


}
