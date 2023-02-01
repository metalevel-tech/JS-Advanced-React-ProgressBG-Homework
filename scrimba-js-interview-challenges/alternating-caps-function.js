/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

console.log("****** SOLUTION 1 ********");

function altCaps1(str = "") {
    return str.split("").map((char, index) => {
        if (char.match(/[a-zA-Z]/)) {

            if (index % 2 === 0) {
                char = char.toUpperCase();
            }

        }
        return char;
    }).join("");
}

console.log(altCaps1("I'm so happy it's Monday"));
console.log(altCaps1("When you visit Portland you have to go to VooDoo Donuts"));


console.log("****** SOLUTION 2 ********");

function altCaps2(str = "") {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}

console.log(altCaps2("I'm so happy it's Monday"));
console.log(altCaps2("When you visit Portland you have to go to VooDoo Donuts"));