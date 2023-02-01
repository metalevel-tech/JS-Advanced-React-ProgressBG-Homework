/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

console.log("****** SOLUTION 1 ********");

function whisper1(input = "") {
    if (input.match(/[A-Z]/)) {
        input = input.split(" ").map(word => {
            if (word.match(/^[A-Z']{2}/))  // Look ahead could be better?!
                return word.toLowerCase();
            else return word;
        }).join(" ");
    }

    return `shh... ${input.replace(/[!]+$/, "")}`;
}

console.log(whisper1("PLEASE STOP SHOUTING."));
console.log(whisper1("MA'AM, this is a Wendy's!"));
console.log(whisper1("A'AM, this is a Wendy's!"));


console.log("****** SOLUTION 2 ********");

function whisper2(str = "") {
    if (str.endsWith("!")) {
        // str = str.slice(0, str.length - 1);
        str = str.slice(0, -1);
    }

    return "shh..." + str.toLowerCase();
}

console.log(whisper2("PLEASE STOP SHOUTING."));
console.log(whisper2("MA'AM, this is a Wendy's!"));
console.log(whisper2("A'AM, this is a Wendy's!"));