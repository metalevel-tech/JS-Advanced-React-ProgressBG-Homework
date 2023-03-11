/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

function removeDupeChars(chars = "") {
  // return chars.split("").reduce((prev, current) => {
  //     if (prev.includes(current)) return prev;
  //     return prev + current;
  // });

  let output = "";
  for (const char of chars) if (!output.includes(char)) output += char;
  return output;

  // let output = "";
  // for (let i = 0; i <= chars.length - 1; i++) {
  //     if (!output.includes(chars[i])) output += chars[i];
  // }
  // return output;
}

console.log(removeDupeChars(password));
console.log(removeDupeChars("pumpkin pranced purposefully across the pond"));
