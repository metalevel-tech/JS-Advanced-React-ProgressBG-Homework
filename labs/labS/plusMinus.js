/*
    Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
*/

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr = []) {
    // Write your code here
    const n = arr.length;
    const pos = arr.filter(number => number > 0).length
    const neg = arr.filter(number => number < 0).length
    const zer = arr.filter(number => number === 0).length; 
    
    console.log((pos / n).toPrecision(6));
    console.log((neg / n).toPrecision(6));
    console.log((zer / n).toPrecision(6));
}

arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
