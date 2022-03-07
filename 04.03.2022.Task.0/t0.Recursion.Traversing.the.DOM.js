/**
 * Change the elements' color based on the color names, mentioned within their text.
 */
/* eslint-env es6 */
(() => {
    const colors = ['red', 'green', 'blue', 'orange'];
    const theNode = document.body;
    // const theNode = document.querySelector('div.border')
    
    function changeColor(node) {
        const text = node.childNodes[0].nodeValue.toLowerCase();

        colors.forEach(color => {
            const test = new RegExp(color).test(text);
            
            if (test && !node.dataset.touched) {
                node.style.color = color;
                node.dataset.touched = true;
            } else if (!node.dataset.touched) {
                node.style.color = getComputedStyle(document.body).color;
            }
        });
    }
    
    function traverse(node) {
        if (!node || node.nodeName === 'SCRIPT') return;
    
        // Do the action
        changeColor(node);
        
        // Do the recursion
        node.childNodes.forEach(element => {
            if (element.nodeType === 1) traverse(element);
        });
    }
    
    traverse(theNode);
})();