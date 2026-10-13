class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        let Icounter = 0
        let response = []
        for(var i = 0; i < strs.length;i++){
            let sorted = strs[i].split("").sort().join("")
            let found = map.get(sorted);
            if(found != undefined){
             response[found] = [...response[found],strs[i]]
            }else{  
             map.set(sorted,Icounter)
             Icounter++
             response.push([strs[i]])
            }
        }
        return response
    }
}
