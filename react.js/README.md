# Tutorial: Intro to React

We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.

Source:

* [Tutorial: Intro to React @React](https://reactjs.org/tutorial/tutorial.html)

## Setup for the Tutorial

(Setup Option 2: Local Development Environment)

1. Make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed. Here is how to install and update it at Ubuntu.

    ```bash
    sudo apt update
    sudo apt install -y nodejs npm
    ```

    ```bash
    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable
    # sudo n latest
    ```

2. Follow the installation instructions for [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to make a new project.

    ```bash
    npx create-react-app tic-tac-toe-game
    ```

3. Delete all files in the `src/` folder of the new project.

    ```bash
    rm -f tic-tac-toe-game/src/*
    ```

4. Add a file named `index.css` in the `src/` folder with [this CSS code](https://codepen.io/gaearon/pen/oWWQNa?editors=0100).

    ```bash
    touch tic-tac-toe-game/src/index.css
    ```

5. Add a file named `index.js` in the `src/` folder with [this JS code](https://codepen.io/gaearon/pen/oWWQNa?editors=0010).

    ```bash
    touch tic-tac-toe-game/src/index.js
    ```

6. Add these three lines to the top of `index.js` in the `src/` folder:

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    ```

Now if you run **`npm start`** in the project folder and open `http://localhost:3000` in the browser, you should see an empty tic-tac-toe field.

We recommend following [these instructions](https://babeljs.io/docs/en/editors/) to configure syntax highlighting for your editor. Also take a look at this tutorial: [How to Set Up VSCode for Your React Projects](https://www.freecodecamp.org/news/vscode-react-setup/). And setup [React Developer Tools](https://reactjs.org/tutorial/tutorial.html#developer-tools) extension for your browser.

## Function components vs Class components

In React, *function components* are a simpler way to write components that only contain a `render` method and don’t have their own state.

Instead of defining a *class* which extends `React.Component`, we can write a function that takes `props` as input and `returns` what should be rendered.

Function components are less tedious to write than classes, and many components can be expressed this way.

```js
// Class component
import React from 'react';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={(e) => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export { Square };
```

```js
// Function component
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export { Square };
```

**Note.** When we modified the Square to be a function component,
we also changed `onClick={() => this.props.onClick()}` to a shorter
`onClick={props.onClick}` (note the lack of parentheses on both sides).
