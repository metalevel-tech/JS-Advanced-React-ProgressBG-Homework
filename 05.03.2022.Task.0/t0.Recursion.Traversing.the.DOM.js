/**
 * Change the elements color based on the color names, mentioned within its text.
 */
/* eslint-env es6 */
(() => {
    const colors = ['red', 'green', 'blue', 'orange'];
    const theNode = document.body;
    // const theNode = document.querySelector('div.border')
    
    function changeColor(node) {
        colors.forEach(color => {
            const text = node.childNodes[0].nodeValue.toLowerCase();
            const test = new RegExp(color).test(text);
            
            if (test && !node.dataset.touched) {
                node.style.color = color;
                node.dataset.touched = true;
            } else if (!node.dataset.touched) {
                node.style.color = 'black';
            }
        });
    }
    
    function traverse(node) {
        if (!node) return;
    
        if (node.nodeName !== 'SCRIPT') {
            changeColor(node);
            
            // The recursion
            node.childNodes.forEach(element => {
                if (element.nodeType === 1) traverse(element);
            });   
        }
    }
    
    traverse(theNode);
})();