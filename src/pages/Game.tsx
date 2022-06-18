import React, { Component, MouseEvent } from 'react';
import './Game.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type RngAppState = {
  n: number
}

function getRandomInt(min:number, max:number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Game extends Component<{}, RngAppState> {
  constructor(props: RngAppState) {
    super(props)
    let n = getRandomInt(1, 16);
    this.state = {
      n: n
    };
    this.repeatHandler = this.repeatHandler.bind(this)
    this.refreshHandler = this.refreshHandler.bind(this)
    // this.refreshHandler()
  }
  refresh() {
    let n = getRandomInt(1, 16)
    this.setState({
      n: n
    });
  }

  repeatHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // this.setState({
    //   display_solution: true,
    //   n: this.state.n,
    //   solution: this.state.n*this.state.n,
    // });
  }

  refreshHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.refresh();
  }

  render () {
    let title, body;
    let c = "text-7xl sm:text-7xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    let c2 = "text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    title = <h1 className={c}>{this.state.n}</h1>
    body = <div className="grid grid-cols-2">
      <button className={c2} onClick={this.repeatHandler}>
        <FontAwesomeIcon icon={["fas", "clipboard"]} /> Répéter
      </button>
      <button className={c2} onClick={this.refreshHandler}>
        <FontAwesomeIcon icon={["fas", "sync"]} /> Un autre!
      </button>
    </div>

    return <div className="container mx-auto">
      <header className="flex justify-center">
        {title}
      </header>
      {body}
    </div>
  }
}

export default Game;
