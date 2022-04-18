// ProgressBG course JS Advanced by Iva Popova, Lesson 2

var colors = ['red', 'green', 'blue'];
var box = document.querySelector('.box');

function changeBackground(color) {
    console.log(`Color: ${color}`);
    box.style.background = color;
}

/**
 for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(`i: ${i}`);
        changeBackground(colors[i]);
    }, 1000 * i);
}

// - setTimeout() is invoked immediately 3 times.
//   The delay is for the callback function. If we pass same delay, 
//   they will be invoked simultaneously after the delay.
//   So, we need to change the delay, i.e. like i*1000
// - But the problem with global i still exists.
*/


// Fix the code by using IIFE
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function(i) {
            console.log(`i: ${j}`);
            changeBackground(colors[j]);
        }, 1000 * (i + 1) );
    })(i);
}