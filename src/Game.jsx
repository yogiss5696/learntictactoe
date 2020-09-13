import React from 'react';
import Board from './Board';


class Game extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
      squares: [],
    };
  }

  handleClick=(i)=>{
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({ squares: squares })
    console.log (i)
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={this.handleClick} squares={this.state.squares}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game