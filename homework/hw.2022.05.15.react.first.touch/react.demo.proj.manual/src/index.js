import React from 'react';
import ReactDOM from 'react-dom';

const rootDOMElement = document.getElementById('root');
const reactElement = React.createElement("h1", null, "Hello, world!");
   
ReactDOM.render(reactElement, rootDOMElement);