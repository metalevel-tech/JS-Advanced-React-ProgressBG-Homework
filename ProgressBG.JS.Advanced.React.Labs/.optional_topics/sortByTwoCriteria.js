/* -------------------------------------------------------------------------- */
/*    Demo: sort a list of strings by 2 criteria:                             */
/*    1. By string length, ascending                                          */
/*    2. Lexicographic order, descending                                      */
/* -------------------------------------------------------------------------- */
const sortByLengthAndLexic_1 = function (a,b) {
    /* ------------------------------- Solution 1 ------------------------------- */
    if(a.length < b.length) return -1;
    if(a.length > b.length) return 1;
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
}
const sortByLengthAndLexic_2 = function (a,b) {
    /* ------------------------------- Solution 2 ------------------------------- */
    if(a.length === b.length){
        return a<b? 1: -1
    }else{
        return a.length - b.length
    }
}

let strings = ["bbb","aaa", "ccccccc","bb", "aa", "cc"];

[...strings].sort(sortByLengthAndLexic_1).forEach(el=> console.log(el));
console.log(`*`.repeat(20));
[...strings].sort(sortByLengthAndLexic_2).forEach(el=> console.log(el));
