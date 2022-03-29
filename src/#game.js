import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import timer from './timer'

// class Square extends React.Component {
//     constructor(props){
//     }
//     render(i) {
//       return (
//         <button 
//             className="square" 
//             onClick={()=>{this.props.onClick()}}
//         >
//           {this.props.i}
//         </button>
//       );
//     }
//   }
  function Square(props){
    return (
            <button 
                className="square" 
                onClick={()=>{props.squareClick()}}
            >
                {props.i}
            </button>
        );
  }

  class Board extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         squares:Array(9).fill(null),
    //         XIsFill:true
    //     }
    // }
    
    renderSquare(i) {
      return <Square 
                i={this.props.squares[i]}
                squareClick={()=>{this.props.gameClick(i)}}
            />;
    }
    
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            history:[
                {
                   squares: Array(9).fill(null)
                }
            ],
            XIsFill:true,
            stepNumber:0
        }
    }
    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber+1)
        const current =  history[history.length-1]
        const square = current.squares.slice()
        if(calculateWinner[square] || square[i]){
            return;
        }
        square[i]  = this.state.XIsFill ? 'X' : 'O'
        this.setState({
            history:history.concat([
                {
                    squares:square
                }
            ]),
            stepNumber:history.length,
            XIsFill:!this.state.XIsFill
        })
    }
    jumpTo(step){
        this.setState({
            stepNumber:step,
            XIsFill:(step %2 ) === 0
        })
    }
    render() {
      const history = this.state.history
      const current = history[this.state.stepNumber]
      const winner = calculateWinner(current.squares);
    
      const moves = history.map((step,move)=>{
        const desc = move ?
        'Go to move #' + move :
        'Go to start'
        return(
            <li key={move}>
               <button onClick={()=>{this.jumpTo(move)}}>{desc}</button> 
            </li>
        )
      })

      let status;
      if(winner){
        status = 'winner is ' + winner
      }else{
        status = `Next player: ${this.state.XIsFill? 'x' : '0'}`;
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={current.squares}
                gameClick={(i)=>{this.handleClick(i)}}
            />
          </div>
          <div className="game-info">
            <div>{ status }</div>
            <ol>{ moves }</ol>
          </div>
          <timer />
        </div>
      );
    }
  }
  
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
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  