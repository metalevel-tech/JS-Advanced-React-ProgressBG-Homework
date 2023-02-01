const container = document.createElement('div');
container.className = 'buttonContainer';
container.id = 'btns';

const buttons = [];

for (let i = 0; i < 9; i++) {
    buttons[i] = document.createElement('button');
    buttons[i].id = `btn${i+1}`;
    buttons[i].innerHTML = i+1;
    buttons[i].className = 'button';
    container.appendChild(buttons[i]);
}

document.body.appendChild(container);

function nextLabel(currentLabel) {
    let labels = [1, 4, 7, 8, 9, 6, 3, 2];
    let index = (labels.indexOf(currentLabel) + 1) % labels.length;
    return labels[index];
}

buttons[4].addEventListener('click', (e) => {
    for (let i = 0; i < 9; i++) {
        if (buttons[i] !== e.target) {
            const currentLabel = Number(buttons[i].innerHTML);
            buttons[i].innerHTML = nextLabel(currentLabel);
        }
    }
});