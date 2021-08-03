import React, { Component, MouseEvent } from 'react';
import './Game.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

class Game extends Component<{}, RngAppState> {
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
    let n = getRandomInt(10, 100)
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
    let c = "text-7xl sm:text-7xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    let c2 = "text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    if(this.state.display_solution) {
      current = <h1 className={c}>{this.state.n}² = {this.state.solution}</h1>;
    } else {
      current = <h1 className={c}>{this.state.n}</h1>
    }

    return <div className="container mx-auto">
      <header className="flex justify-center">
        {current}
      </header>
      <div className="grid grid-cols-2">
        <button className={c2} onClick={this.showSolutionHandler}>
          <FontAwesomeIcon icon={["fas", "clipboard"]} /> Solution
        </button>
        <button className={c2} onClick={this.refreshHandler}>
          <FontAwesomeIcon icon={["fas", "sync"]} /> Un autre!
        </button>
      </div>
    </div>
  }
}

export default Game;
