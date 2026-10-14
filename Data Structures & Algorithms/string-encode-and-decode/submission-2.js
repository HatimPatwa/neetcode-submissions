class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.length === 0 ? '++' : strs.join("--")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('str',str)
        
        return str === '++' ? [] :  str.split("--")
    }
}
