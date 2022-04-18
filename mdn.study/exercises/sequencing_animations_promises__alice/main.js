const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' },
    { transform: 'rotate(0) scale(1)' }
];

const aliceTiming = {
    duration: 3000,
    iterations: 1.5,
    fill: 'forwards'
};

/**
 * Note in some way browsers select the elements by id ?!?
 * But we can select compound names as 'alice-1'
 */
// const alice1 = document.querySelector('#alice1');
// const alice2 = document.querySelector('#alice2');
// const alice3 = document.querySelector('#alice3');

/**
 * Callback Hell solution
 * :: in the next example instead () is used animationObj as remember mark
 * 
 alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
     alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
         alice3.animate(aliceTumbling, aliceTiming).finished.then(() => {
             console.log('alice is done');
         });
     });
 }).catch(error => console.error(`Error animating Alice: ${error}`));
**/

/**
 * Promise Chain solution
 * :: animationObj is not () here, just to remember what the finished method puts in the resolve
 * 
alice1.animate(aliceTumbling, aliceTiming).finished
    .then(animationObj => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(animationObj => alice3.animate(aliceTumbling, aliceTiming).finished)
    .then(animationObj => console.log('alice is done'));
    .catch(error => console.error(`Error animating Alice: ${error}`));
**/

/**
 * Async/Await solution
 */
async function animateAlice() {
    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished;
        await alice2.animate(aliceTumbling, aliceTiming).finished;
        await alice3.animate(aliceTumbling, aliceTiming).finished;
    }
    catch (error) {
        console.error(`Error animating Alice: ${error}`);
    }
}
animateAlice();
