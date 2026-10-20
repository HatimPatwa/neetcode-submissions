class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for(const price of prices){
            minPrice = Math.min(minPrice,price)
            const profit = price - minPrice;
            maxProfit = Math.max(maxProfit,profit)
        }
        return maxProfit;
    }

}
