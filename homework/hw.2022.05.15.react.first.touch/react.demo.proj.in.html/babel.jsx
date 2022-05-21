// const getMessage = () => "Hello World";
// console.log(getMessage());
// document.getElementById('root').innerHTML = getMessage();

const root = document.getElementById('root');

const element1 = <h1>Hello from React :: Element 1</h1>;
console.log(element1);

const element2 = React.createElement('h1', null, 'Hello from React :: Element 2');
console.log(element2);

// ReactDOM.render([element1, element2], root);
ReactDOM.render(element2, root);