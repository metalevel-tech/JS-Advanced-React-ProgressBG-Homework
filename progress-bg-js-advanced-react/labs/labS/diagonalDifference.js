/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let ltrDiagonal = 0; // arr[0][0] + arr[1][1] + arr[2][2];
    let rtlDiagonal = 0; // arr[0][2] + arr[1][1] + arr[2][0];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) ltrDiagonal += arr[i][j];
            if (i === arr.length - 1 - j) rtlDiagonal += arr[i][j];
        }
    }

    return Math.abs(ltrDiagonal - rtlDiagonal);
}

const arr = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]; // 15

console.log(diagonalDifference(arr));