/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

/**
 * This works but it is too complex and probably slow
 */
function isAnagram_1(str1 = "", str2 = "") {
    if (str1.length !== str2.length) return false;
    if (str1 === str2.split("").reverse().join("")) return true;

    const arrStr2 = str2.split("");
    for (let letter of str1) {
        const positionIn2 = arrStr2.indexOf(letter);

        if (positionIn2 > -1)
            arrStr2.splice(positionIn2, 1);
    }
    return arrStr2.length ? false : true;
}

function isAnagram_2(str1 = "", str2 = "") {
    if (str1.length !== str2.length) return false;
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram_1("rainbow", "crossbow"));
console.log(isAnagram_1("allergy", "gallery"));
console.log(isAnagram_1("yrellag", "gallery"));
console.log("***");
console.log(isAnagram_2("rainbow", "crossbow"));
console.log(isAnagram_2("allergy", "gallery"));
console.log(isAnagram_2("yrellag", "gallery"));
console.log(isAnagram_2("treasure", "measure"));
console.log(isAnagram_2("alabala", "balaala"));
console.log(isAnagram_2("inch", "chin"));
console.log(isAnagram_2("night", "thing"));



