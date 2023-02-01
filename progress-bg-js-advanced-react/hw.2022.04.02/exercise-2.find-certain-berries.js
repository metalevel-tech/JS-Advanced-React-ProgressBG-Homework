// https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/RegEx/RegEx.html#/5/25
// TASK: match stings containing 'strawberries' or 'raspberries' words:
// NB: this is not example of good practice for grouping regex. Why? => check next slides

const rx = /\b(?:straw|rasp|black)?berries/; // only blueberries are not catch

const strings = [
    'Ice cream with strawberries?',
    'Ice cream with blueberries?',
    'Ice cream with raspberries?',
    'Ice cream with berries?',
    'Ice cream with blackberries?'
];

strings.forEach(str => {
    const match = str.match(rx);
    (match) ? console.log(`${str} YES!`) : console.log(`${str} NO!`);
});
