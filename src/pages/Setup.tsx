import React, { Component, MouseEvent } from 'react';
import './Setup.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type GameSettingsState = {
  min_value: number,
  max_value: number,
}

class Game extends Component<{}, GameSettingsState> {
  constructor(props: GameSettingsState) {
    super(props)
    this.state = {
      min_value: 10,
      max_value: 100
    };
  }

  render () {
    let current;
    let c = "text-7xl sm:text-7xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    let c2 = "text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10";
    
    return <div className="container mx-auto">
      <header className="flex justify-center">
        Jeu
      </header>
      <ul>
        <li>Tutoriel</li>
        <li>Facile</li>
        <li>Moyen</li>
        <li>Difficile</li>
      </ul>
    </div>
  }
}

export default Game;
