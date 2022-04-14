const index = (() => {
    let index = 0;
    return () => { console.log(`${'*'.repeat(20)} ${++index} ${'*'.repeat(20)}`); };
})();

// https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/RegEx/RegEx.html#/5/28
// TASK: match strings that are at least 4 symbols long with at least one digit in it:

const tests1 = [     // Lookahead:               // Lookbehind:
    "abcd", 		// not (missing digit)      // not (end with letter)
    "ab1d", 		// ok                       // not (end with letter)
    "1bcd", 		// ok                       // not (end with letter)
    "abcd123", 		// ok                       // ok (ends with digit)
    "123", 		    // not (length)             // ok (ends with digit)
    "12a", 		    // not (length)             // not (end with letter)
];

index(); // 1
// Lookahead
const rx1 = /^(?=.*\d).{4,}/;
tests1.filter(str => str.match(rx1)).forEach(str => console.log(str));
// ab1d
// 1bcd
// abcd123

index(); // 2
// Lookbehind
const rx2 = /(?<=.*\d)\d*$/;
tests1.filter(str => str.match(rx2)).forEach(str => console.log(str));


// TASK: filter only valid passwords:
// a valid password is
// 	1. at least 6 symbols long
// 	2. must contain at least one letter and number
const tests2 = [
    "a@# cdfasas!", 	// not (missing digit)
    "a@#9cdfas", 		// ok
    "1a@#sda", 		    // ok
    "1@@@1344", 		// not (missing letter)
    "123ab", 		    // not (length)
];

index(); // 3
const rx3 = /^(?=.*\d)(?=.*\w).{6,}$/;
tests2.filter(str => str.match(rx3)).forEach(str => console.log(str));