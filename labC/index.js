const test = [
    'ada',
    'ada'
];

const rx = /ada/gi;

test.forEach(element => {
    console.log(rx.test(element));
    rx.lastIndex = 0;
});

test.forEach(element => {
    console.log(element.match(rx));
    // rx.lastIndex = 0;
});

