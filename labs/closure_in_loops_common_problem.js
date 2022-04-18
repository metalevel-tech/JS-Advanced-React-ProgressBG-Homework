// ProgressBG course JS Advanced by Iva Popova, Lesson 2

var cats = [];

for (var i = 0; i < 3; i++) {
    cats[i] = function() {
        console.log(`Cat ${i} is ready!`)
    }
}

cats[0](); // Cat 3 is ready!
cats[1](); // Cat 3 is ready!
cats[2](); // Cat 3 is ready!

// The value of 'i' in the cats[i] function body is determined when the function is invoked!
// The problem is the nature of 'var', which has function scope.

// One possible solution within ES6 is using 'let', which has block scope and will be scoped to the for loop.
console.log('Solution by using let.');

for (let i = 0; i < 3; i++) {
    cats[i] = function() {
        console.log(`Cat ${i} is ready!`)
    }
}

cats[0](); // Cat 3 is ready!
cats[1](); // Cat 3 is ready!
cats[2](); // Cat 3 is ready!

// Another possible solution is to creat a local scope by using IIFE.
console.log('Solution by using IIFE.');

for (var i = 0; i < 3; i++) {
    (function(j) {
        cats[j] = function() {
            console.log(`Cat ${j} is ready!`);
        }
    })(i);
    
}

cats[0](); // Cat 3 is ready!
cats[1](); // Cat 3 is ready!
cats[2](); // Cat 3 is ready!

// Also we can use Factory function that will create local scope too.
console.log('Solution by using Factory function.');

function catMaker(i) {
    return function() {
        console.log(`Cat ${i} is ready!`);
    }
}

for (var i = 0; i < 3; i++) {
    cats[i] = catMaker(i);
}

cats[0](); // Cat 3 is ready!
cats[1](); // Cat 3 is ready!
cats[2](); // Cat 3 is ready!
