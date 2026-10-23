class Solution {
     areMapsEqual(map1, map2) {

        for (const [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1map = new Map()
        for (const val of s1) { //first original hash frequency counter
            s1map.set(val, (s1map.get(val) || 0) + 1);
        }

        let l = 0;
        const subMap = new Map();
        for (let r = 0; r < s2.length; r++) {
            let window = r - l + 1
            subMap.set(s2[r], (subMap.get(s2[r]) || 0) + 1);
            //compare two maps
            if (this.areMapsEqual(s1map, subMap)) return true
            if (window == s1.length) {
                subMap.set(s2[l], subMap.get(s2[l]) - 1);
                l++
            }
        }
        return false;
    }

   

}
