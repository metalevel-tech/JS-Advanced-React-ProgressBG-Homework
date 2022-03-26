// Given is an array of todos objects:
const todos = [
	{
		title:'Todo1',
		completed: true,
		priority:'low'
	},
	{
		title:'Todo2',
		completed: false,
		priority:'low'
	},
	{
		title:'Todo3',
		completed: true,
		priority:'high'
	},
	{
		title:'Todo4',
		completed: true,
		priority:'medium'
	},
	{
		title:'Todo5',
		completed: false,
		priority:'high'
	},
	{
		title:'Todo6',
		completed: true,
		priority:'low'
	},
]

// Task: write a function: sortArrayByKey(arr), which will return a new array in which the elements of todos array will be sorted by key (property) in ascending order.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */

function sortArrayByKey(arr, key) {
	const newArr = [...arr];
    return newArr.sort((a, b) => {
        // case insensitivity, get the ASCII number
        const A = a[key].toLowerCase().charCodeAt();
        const B = b[key].toLowerCase().charCodeAt();
        return A - B;
    });
}

sortArrayByKey(todos, 'priority').forEach(el => console.log(el));
console.log('_'.repeat(10));

todos.forEach(el => console.log(el));
console.log('_'.repeat(10));
/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log( sortArrayByKey(todos, 'priority'));

// EXPECTED OUTPUT:
// [
// 	{ title: 'Todo3', completed: true, priority: 'high' },
// 	{ title: 'Todo5', completed: false, priority: 'high' },
// 	{ title: 'Todo1', completed: true, priority: 'low' },
// 	{ title: 'Todo2', completed: false, priority: 'low' },
// 	{ title: 'Todo6', completed: true, priority: 'low' },
// 	{ title: 'Todo4', completed: true, priority: 'medium' }
// ]