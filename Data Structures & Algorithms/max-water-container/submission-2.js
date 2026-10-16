class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
        let maxAr = 0;
        var p1 = 0;
        var p2 = h.length - 1;
        for(let i = 0; i < h.length; i++ ){
            let height = Math.min(h[p1],h[p2])
            let width = p2 - p1
            let ar = height * width
            maxAr = maxAr < ar ? ar : maxAr;
            if(h[p2] < h[p1 ]){
                p2 -= 1
            }else{
                p1 += 1
            }
            
        }
        return maxAr;
    }
}
