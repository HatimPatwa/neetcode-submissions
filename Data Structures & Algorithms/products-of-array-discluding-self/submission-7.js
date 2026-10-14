class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroIndex;
        let twoZero;
        let totalMul = 1;
        for (var i = 0; i < nums.length; i++) {
            if (zeroIndex == undefined  && nums[i] === 0) {
                zeroIndex = i;
                continue;
            } else if (zeroIndex != undefined && nums[i] === 0) {

                twoZero = true;
                break;
            }
            totalMul = totalMul * nums[i];

        }
        if (twoZero) return Array.from({ length: nums.length }, () => 0)
        else if (!twoZero && zeroIndex != undefined) {
            let a = Array.from({ length: nums.length }, () => 0);
            a[zeroIndex] = totalMul;
            return a
        }
        const resp = []
        for (var i = 0; i < nums.length; i++) {
            resp.push(totalMul / nums[i]);
        }
        return resp
    }
}
