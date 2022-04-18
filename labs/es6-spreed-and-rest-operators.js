// Spreed
const arr1 = [1,2,3];
const arr2 = ['a','b','b'];

console.log(...arr1);

function sumOfThree(a, b, c) {
    return a + b + c;
}
console.log(sumOfThree(...arr1));

const arrNew = [...arr1, ...arr2, 'plus some other values'];
console.log(arrNew);

// Rest
function logRest(arg1, arg2, ...restArgs) {
    for (let argN in arguments) {
        console.log(`arguments[${argN}]:\t${arguments[argN]}`);
    }
    
    console.log('arg1:     \t' + arg1);
    console.log('arg2:     \t' + arg2);
    console.log('restArgs: \t' + restArgs);
}

logRest('a', 'b', 'c', 'd', 'e', 'f');