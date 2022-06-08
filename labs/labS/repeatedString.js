/*
    There is a string, a, of lowercase English letters that is repeated infinitely many times. Given an integer, n, 
    find and print the number of letter a's in the first n letters of the infinite string.
*/

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    const searched = 'a';
    if (s === searched) return n;

    const re = new RegExp(searched, 'g');
    if (s.length > n) return s.slice(0, n).match(re).length;
  
    const singleStrMatch = s.match(re);
    const singleStrCount = singleStrMatch ? singleStrMatch.length : 0;
    if (!singleStrCount) return singleStrCount;

    const repeat = Math.ceil(n / s.length);
    const rest = n % s.length;
    if (!rest) return singleStrCount * repeat;
    
    const singleRestMatch = s.slice(0, rest).match(re);
    const restCount = singleRestMatch ? singleRestMatch.length : 0;
    return (singleStrCount * (repeat - 1)) + restCount;
}

const s0 = 'abcacabcacabcac'
const n0 = 10;
console.log(repeatedString(s0, n0)); // 4

const s1 = 'abcac'
const n1 = 10;
console.log(repeatedString(s1, n1)); // 4

const s2 = 'aba'
const n2 = 10;
console.log(repeatedString(s2, n2)); // 7


const s3 = 'aab'
const n3 = 882787;
console.log(repeatedString(s3, n3)); // 588525

const s4 = 'bab'
const n4 = 725261545450;
console.log(repeatedString(s4, n4)); // 241753848483

const s5 = 'ceebbcb'
const n5 = 817723;
console.log(repeatedString(s5, n5)); // 0

const s6 = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'
const n6 = 736778906400;
console.log(repeatedString(s6, n6)); // 51574523448
