/*
    Given five positive integers, find the minimum and maximum values 
    that can be calculated by summing exactly four of the five integers.
    Then print the respective minimum and maximum values as 
    a single line of two space-separated long integers.
*/

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr = []) {
    // Write your code here
    let maxSum = 0;
    let minSum = arr.reduce((current, acc) => acc + current);

    for (let i = 0; i < arr.length; i++) {
        const tmpArr = [...arr]
        tmpArr.splice(i, 1);
        const tmpSum = tmpArr.reduce((current, acc) => acc + current);
        
        if (tmpSum > maxSum) maxSum = tmpSum;
        if (tmpSum < minSum) minSum = tmpSum;
    }

    console.log(`${minSum} ${maxSum}`);
}


const arr1 = [1, 3, 5, 7, 9]; // 16 24
miniMaxSum(arr1);

const arr2 = [1, 2, 3, 4, 5]; // 10 14
miniMaxSum(arr2);