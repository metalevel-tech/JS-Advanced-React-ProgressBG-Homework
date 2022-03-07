(function() {
    const elementsToRemove = document.body.querySelectorAll('#repository-container-header,.file-navigation,.f4.mt-3,.Box.mb-3,.d-flex.js-sticky.top-0');
    elementsToRemove.forEach((node) => {node.parentNode.removeChild(node);});
})();