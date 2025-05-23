/* 
 Best Time to Buy and Sell Stock
 You are given an array of prices where prices[i] is the price of a
 given stock on an ith day.
 You want to maximize your profit by choosing a single day to buy
 one stock and choosing a different day in the future to sell that
 stock.
 Return the maximum profit you can achieve from this transaction.
 If you cannot achieve any profit, return 0

 Input: prices = [7,1,5,3,6,4]
 Output: 5
 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
 profit = 6-1 = 5.
*/

function maximizeProfit(arr){
    let minimumSoFar = arr[0];
    let maxProfit = 0;

    for(let i =0; i<arr.length; i++){
        minimumSoFar = Math.min(arr[i], minimumSoFar);
        let profit = arr[i] - minimumSoFar;
        maxProfit = Math.max(maxProfit, profit);

    }
    return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
// console.log(maximizeProfit(prices));
console.log(test(prices));
