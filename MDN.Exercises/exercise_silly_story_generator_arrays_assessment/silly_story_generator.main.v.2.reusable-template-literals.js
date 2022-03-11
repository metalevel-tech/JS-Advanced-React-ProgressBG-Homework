const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyTextFn = (x, y, z) => `It was 94 fahrenheit outside, so ${x} went for a walk. When they got to ${y}, they stared in horror for a few moments, then ${z}. Bob saw the whole thing, but was not surprised — ${x} weighs 300 pounds, and it was a hot day.`;

const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];

const insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];

const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

const bindEnterToResult = (event) => {
    if (event.key === 'Enter') result();
};
document.addEventListener('keypress', bindEnterToResult);

function result() {
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    let newStory = storyTextFn(xItem, yItem, zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.07142857) + ' stones';
        const temperature =  Math.round((94 - 32) * (5/9)) + ' centigrade';

        newStory = newStory
            .replace(/94 fahrenheit/g, temperature)
            .replace(/300 pounds/g, weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}