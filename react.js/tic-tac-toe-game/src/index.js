import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props) {
    return (
        <button className={props.win ? "square win" : "square"} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Board(props) {

    const renderSquare = (col, row) => {
        const i = col + row * 3;
         
        return (
            <Square
                key={i}
                win={props.line && props.line.includes(i)}
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    };

    return (
        <div>
            {[0, 1, 2].map(row =>
                <div key={row} className="board-row">
                    {[0, 1, 2].map(col => renderSquare(col, row))}
                </div>
            )}
        </div>
    );
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                lastTurn: null
            }],
            superNumber: 0,
            xIsNext: true,
            order: "asc"
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.superNumber + 1);
        const current = history[history.length - 1];    // ES2022:  history.at(-1);
        const squares = [...current.squares];           // const squares = current.squares.slice();

        if (calculateWinner(squares).winner || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : "O";
        this.setState({
            history: history.concat([{
                squares: squares,
                lastTurn: i
            }]),
            superNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    
    handleOrder() {
        this.setState({
            order: this.state.order === "desc" ? "asc" : "desc"
        });
    }

    jumpTo(step) {
        console.log(step);
        this.setState({
            superNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const { history } = this.state;
        const current = history[this.state.superNumber];

        const {winner, line} = calculateWinner(current.squares);

        const movies = history.map((step, movie) => {
            const { lastTurn } = step;
            
            const col = lastTurn % 3 + 1;
            const row = Math.floor(lastTurn / 3) + 1;

            const desc = movie ?
                `Go to movie #${movie} {r:${row}, c:${col}} ${step.squares[lastTurn]}` :
                `Go to game start`;

            return (
                <li key={movie} className={(this.state.superNumber === movie) ? 'current' : 'other'}>
                    {movie}.&nbsp;<button onClick={(e) => this.jumpTo(movie)}>{desc}</button>
                </li>
            );
        })

        let status;
        if (winner) status = `Winner ${winner}`;
        else if (!winner && this.state.superNumber >= 9) status = "Draw";
        else status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;

        if (this.state.order === "desc") {
            movies.reverse();
        }

        return (
            <div className={status === "Draw" ? "game draw" : "game"}>
                <div className="game-board">
                    <Board
                        line={line}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>
                        Order: <button onClick={(e)=> this.handleOrder()}>{this.state.order}</button>
                    </div>
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
            return {winner:squares[a], line:lines[i]};
        }
    }
    return {winner:null, line:null};
}