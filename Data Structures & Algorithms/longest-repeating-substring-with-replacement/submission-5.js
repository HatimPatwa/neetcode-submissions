class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let l = 0;
        let longestSub = 0;
        for (let r = 0; r < s.length; r++) {
            map.set(s[r],(map.get(s[r]) || 0) + 1);
            //valid window
            let window = r - l + 1
            let max = 0;
            for (const value of map.values()) {
                max = Math.max(max, value);
            }
            if (window - max <= k){
                longestSub = Math.max(longestSub, window)
            }else{
                //window not valid move pointer l
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
        }
        return longestSub;

    }
}
