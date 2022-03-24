function doSomething(node) {
	node.style.backgroundColor = '#00FF00'
}

// const nodes = document.querySelectorAll('.red')

// console.log( document.body.classList.contains('red') );

function DOMTraverse(node) {
	// check condation:
	if(node.classList.contains('red')){
		doSomething(node)
	}

	// get body childred
	const children = node.children;

	for (let i = 0; i < children.length; i++) {
		const element = children[i];
		DOMTraverse(element)
	}
}


DOMTraverse(document.body)