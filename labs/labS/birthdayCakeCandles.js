/*
    You are in charge of the cake for a child's birthday.
    You have decided the cake will have one candle for 
    each year of their total age. They will only be able to 
    blow out the tallest of the candles. Count how many candles
    are tallest.
*/

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles = []) {
    // Write your code here
    const hightestCandle = candles.reduce((current, acc) => current > acc ? current : acc);
    return candles.filter(candleHeight => candleHeight === hightestCandle).length;
}

const candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles));