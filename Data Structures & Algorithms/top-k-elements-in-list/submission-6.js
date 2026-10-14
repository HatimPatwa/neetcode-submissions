class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */


        topKFrequent(nums, k) {
            const freq = new Map();

            // Step 1: Count frequencies
            for (const num of nums) {
                freq.set(num, (freq.get(num) || 0) + 1);
            }

            // Step 2: Create frequency buckets
            const buckets = Array.from(
                { length: nums.length + 1 },
                () => []
            );

            for (const [num, count] of freq) {
                buckets[count].push(num);
            }

            // Step 3: Collect the k most frequent elements
            const result = [];

            for (let i = buckets.length - 1; i >= 1; i--) {
                for (const num of buckets[i]) {
                    result.push(num);

                    if (result.length === k) {
                        return result;
                    }
                }
            }

            return result;
        }

       

    
}
