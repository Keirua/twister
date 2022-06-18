import React, { Component, MouseEvent } from 'react';
import './Game.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let id_mapping = [
  {sound:"", color: "#0F0", text:"Pied gauche, vert"},
  {sound:"", color: "yellow", text:"Pied gauche, jaune"},
  {sound:"", color: "#00F", text:"Pied gauche, bleu"},
  {sound:"", color: "#f00", text:"Pied gauche, rouge"},
  {sound:"", color: "#FFF", text:"Pied gauche, en l’air"},
  {sound:"", color: "#0F0", text:"Pied droit, vert"},
  {sound:"", color: "yellow", text:"Pied droit, jaune"},
  {sound:"", color: "#00F", text:"Pied droit, bleu"},
  {sound:"", color: "#f00", text:"Pied droit, rouge"},
  {sound:"", color: "#FFF", text:"Pied droit, en l’air"},
  {sound:"", color: "#0F0", text:"Main gauche, vert"},
  {sound:"", color: "yellow", text:"Main gauche, jaune"},
  {sound:"", color: "#00F", text:"Main gauche, bleu"},
  {sound:"", color: "#f00", text:"Main gauche, rouge"},
  {sound:"", color: "#FFF", text:"Main gauche, en l’air"},
  {sound:"", color: "#0F0", text:"Main droite, vert"},
  {sound:"", color: "yellow", text:"Main droite, jaune"},
  {sound:"", color: "#00F", text:"Main droite, bleu"},
  {sound:"", color: "#f00", text:"Main droite, rouge"},
  {sound:"", color: "#FFF", text:"Main droite, en l’air"},
];

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
    let n = getRandomInt(0, id_mapping.length-1);
    this.state = {
      n: n
    };
    this.repeatHandler = this.repeatHandler.bind(this)
    this.refreshHandler = this.refreshHandler.bind(this)
  }
  refresh() {
    let n = getRandomInt(0, id_mapping.length-1)
    this.setState({
      n: n
    });
  }

  repeatHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  refreshHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.refresh();
  }

  render () {
    let title, body;
    let c = "text-7xl sm:text-7xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    let c2 = "text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    title = <h1 className={c}>{id_mapping[this.state.n].text}</h1>
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
