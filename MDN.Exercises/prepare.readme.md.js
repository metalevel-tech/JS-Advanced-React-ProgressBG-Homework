/**
 * Run this function in the browser's console, before you print the README.md page.
 */
(function() {
    const elementsToRemove = document.body.querySelectorAll('#repository-container-header,.file-navigation,.f4.mt-3,.Box.mb-3,.d-flex.js-sticky.top-0');
    elementsToRemove.forEach((node) => {node.parentNode.removeChild(node);});

    const links = document.body.querySelectorAll('a');
    links.forEach((node) => {node.style.color = 'black';});

    const list = document.body.querySelectorAll('.contains-task-list li input').length;
    if (list) {
        const passed = document.body.querySelectorAll('.contains-task-list li input[checked]').length;
        const output = `Topics: <b>${list}</b> | Passed: <b>${passed}</b> | Prgrs%: <b>${((passed / list) * 100).toFixed(0)}</b>`;
    
        const element = document.createElement('p');
        element.innerHTML = output;
        const firstH1 = document.body.querySelector('article > h1');
        firstH1.after(element);
    }
})();