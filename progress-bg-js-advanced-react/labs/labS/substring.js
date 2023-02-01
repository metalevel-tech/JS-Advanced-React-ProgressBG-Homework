
// Find the max alphabet substring in a given string.

function maxSubstring(s) {
    // Write your code here
    const stringArr = s.split('');
    const outArr = [];

    for (let i = 0; i < stringArr.length; i++) {
        const tempArr = [];

        for (let j = i; j < stringArr.length; j++) {
            tempArr.push(stringArr[j]);

            const tempStr = tempArr.join('');

            if (outArr.indexOf(tempStr) === -1) {
                outArr.push(tempStr);
            }
        }
    }

    outArr.sort();
    return outArr[outArr.length - 1];
}

console.log(maxSubstring('banana')); // nana
console.log(maxSubstring('blob'));
