import React, { Component, MouseEvent } from 'react';
import './App.css';

type RngAppState = {
  n: number,
  solution: number
  display_solution: boolean
}

function getRandomInt(min:number, max:number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component<{}, RngAppState> {
  constructor(props: RngAppState) {
    super(props)
    let n = getRandomInt(1, 100);
    this.state = {
      n: n,
      solution: n*n,
      display_solution: false
    };
    this.showSolutionHandler = this.showSolutionHandler.bind(this)
    this.refreshHandler = this.refreshHandler.bind(this)
  }
  refresh() {
    let n = getRandomInt(1, 100)
    this.setState({
      n: n,
      solution: n*n,
      display_solution: false
    });
  }

  showSolutionHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.setState({
      display_solution: true,
      n: this.state.n,
      solution: this.state.n*this.state.n,
    });
  }

  refreshHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.refresh();
  }

  render () {
    let current;
    if(this.state.display_solution) {
      current = <p>{this.state.n}² = {this.state.solution}</p>;
    } else {
      current = <p>{this.state.n}</p>
    }
    return <div className="App">
      <header className="App-header">
        {current}
      </header>
      <button onClick={this.showSolutionHandler}>
        Solution
      </button>
      <button onClick={this.refreshHandler}>
        New number
      </button>
    </div>
  }
}

export default App;
