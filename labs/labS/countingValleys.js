/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'STEPS' steps,
for every step it was noted if it was an uphill, U, or a downhill, D step. 
Hikes always start and end at sea level, and each step up or down represents a 1 unit 
change in altitude. We define the following terms:

- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

*/

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let level = 0;
    let valley = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level++;
            if (level === 0) valley++;
        } else level--;
    }
    return valley;
}

console.log(countingValleys(8, 'UDDDUDUU'));
console.log(countingValleys(16, 'UDDDUDUUUDDDUDUU'));
console.log(countingValleys(12, 'DDUUDDUDUUUD'));
console.log(countingValleys(24, 'DDUUDDUDUUUDDDUUDDUDUUUD'));
