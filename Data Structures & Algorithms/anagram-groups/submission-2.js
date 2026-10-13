class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        let c = 0
        let r = []
        for(var i = 0; i < strs.length;i++){
            let s = strs[i].split("").sort().join("")
            let found = map.get(s);
            if(found != undefined){
             r[found] = [...r[found],strs[i]]
            }else{  
             map.set(s,c)
             c++
             r.push([strs[i]])
            }
        }
        return r
    }
}
