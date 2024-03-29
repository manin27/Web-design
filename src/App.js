import React from 'react';
//import axios from 'axios'
import Main from './Page/Main'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        count: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? 'x' : '0';
    for (let i = 0; i < 8; i++)
    {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s)
      {
        alert(s + ' win');
        setTimeout(() => {
          this.setState({squares : Array(9).fill(null)});
          this.setState({count: 0});
        }, 3000)
      }
    }
  }
  
  clickHandler = event => {
    let data = event.target.getAttribute('data');
    let current = this.state.squares;
    if (current[data] === null) {
      current[data] = (this.state.count % 2 === 0) ? 'x' : '0';
      this.setState({count: this.state.count + 1});
      this.setState({squares: current});
    }
    else 
    {
      alert('Так нельзя!!!');
    }
    this.isWinner();
  }

  render () {
    return(<div>          
      <h1>Eror url</h1> 
      <div className='w-40 h-40 mt-12 mx-auto'>
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="0">
          {this.state.squares[0]}         
        </div> 
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="1">
          {this.state.squares[1]}         
        </div>
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="2">
          {this.state.squares[2]}         
        </div>
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="3">
          {this.state.squares[3]}         
        </div>
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="4">
          {this.state.squares[4]}         
        </div> 
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="5">
          {this.state.squares[5]}         
        </div>
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="6">
          {this.state.squares[6]}         
        </div>
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="7">
          {this.state.squares[7]}         
        </div>
        <div className='w-12 h-12 border-solid border-black border-2 float-left box-border' onClick={this.clickHandler} data="8">
          {this.state.squares[8]}         
        </div>
      </div>      
    </div>)
  };
}

export default App;
