import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Board(props) {
    const renderSquare = (i) => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            superNumber: 0,
            xIsNext: true
        }
    }

    handleClick(i) {
        // const { history } = this.state;
        const history = this.state.history.slice(0, this.state.superNumber + 1);
        const current = history[history.length - 1];    // ES2022:  history.at(-1);
        const squares = [...current.squares];           // const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : "O";
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            superNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            superNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const { history } = this.state;
        const current = history[this.state.superNumber];

        const winner = calculateWinner(current.squares);

        const movies = history.map((step, movie) => {
            const desc = movie ? `Go to movie #${movie}` : `Go to game start`;

            return (
                <li key={movie}>
                    <button onClick={(e) => this.jumpTo(movie)}>{desc}</button>
                </li>
            );
        })

        let status;
        if (winner) status = `Winner ${winner}`;
        else status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{movies}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// Helper functions =======================

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}