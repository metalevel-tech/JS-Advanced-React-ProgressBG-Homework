// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue

(function() {
    const output = document.querySelector('#squaresLoopContinue p.output');
    const input = document.querySelector('#squaresLoopContinue #numberSquares');
    const btn = document.querySelector('#squaresLoopContinue button.submit');

    // console.log(output, input, btn);
    btn.addEventListener('click', () => {
        const num = Number(input.value);
        if (!num) return;
        input.value = '';
        input.focus();
        output.textContent = '';

        for (let i = 1; i <= num; i++) {
            const sqrtRoot = Math.sqrt(i);
            if (Math.floor(sqrtRoot) !== sqrtRoot) {
                continue;
            }
            output.textContent += `${i} `;
        }
    })

})();