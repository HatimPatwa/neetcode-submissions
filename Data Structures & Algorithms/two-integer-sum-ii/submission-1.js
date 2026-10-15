class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var p1 = 0;
        var p2 =numbers.length - 1;
        for(var i=0;i < numbers.length;i++) {
           if((numbers[p1] + numbers[p2]) > target) p2--;
           else if ((numbers[p1] + numbers[p2]) < target ) p1++;
           else return [p1+1,p2+1];
        }
    }
}
