const { filter } = require("minimatch");

const nums1 = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
const nums2 = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
    // Complete the function
    const findMax = (numArr) => {
        return numArr.reduce((number, acc) => (number > acc) ? number : acc);
    };
    const maxNumber = findMax(nums);
    const filtered = nums.filter(number => number !== maxNumber);

    return findMax(filtered);
}

console.log(getSecondLargest(nums1)); // 10
console.log(getSecondLargest(nums2)); // 10