// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#looping_code_example

(function() {
    const btnCircles = document.querySelector('#drawRandomItems button#circles');
    const btnSquares = document.querySelector('#drawRandomItems button#squares');
    const itemType = document.querySelector('#drawRandomItems span#drawItemType');
    const canvas = document.querySelector('#drawRandomItems canvas');
    const ctx = canvas.getContext('2d');
    
    const WIDTH = canvas.clientWidth;
    const HEIGHT = canvas.clientHeight;
    
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    
    function random(number) {
        return Math.floor(Math.random() * number);
    }
    
    function randomColor() {
        return `rgba(${random(255)}, ${random(255)}, ${random(255)}, 0.5)`;
    }
    
    function drawCircles() {
        itemType.textContent = '[Circles]';

        ctx.clearRect(0,0,WIDTH,HEIGHT);
    
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.fillStyle = randomColor();
            ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    function drawSquares() {
        itemType.textContent = '[Squares]';

        ctx.clearRect(0,0,WIDTH,HEIGHT);
    
        for (let i = 0; i < 100; i++) {
            const wh = random(100);
            ctx.beginPath();
            ctx.fillStyle = randomColor();
            ctx.rect(random(WIDTH), random(HEIGHT), wh, wh);
            ctx.fill();
        }
    }
    
    btnCircles.addEventListener('click', drawCircles);
    btnSquares.addEventListener('click', drawSquares);
    
    switch (random(2)) {
        case 1:
            drawSquares();
            break;
        default:
            drawCircles();
    }
})();