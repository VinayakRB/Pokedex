import React, { Component } from 'react';
import './css/Pokebattle.css';
import Pokedex from './Pokedex';

function getExp(deck) {
  return deck.reduce((acc, card) => {
    return acc + card.base_experience;
  }, 0);
}

export default class Pokebattle extends Component {
  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 1, name: 'Bulbasaur', type: 'bug', base_experience: 90},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  }
  render() {
    const deck1 = [];
    const deck2 = [...this.props.pokemon];
    while(deck1.length < deck2.length) {
      let randNum = Math.floor(Math.random() * deck2.length);
      deck1.push(deck2.splice(randNum, 1)[0]);
    }
    const exp1 = getExp(deck1);
    const exp2 = getExp(deck2);
    const message = (e1, e2) => {
      return e1 > e2 ? 'Won' : 'Lost';
    }

    return (
      <div className="Pokebattle">
        <Pokedex data={deck1} isWinner={exp1 > exp2} />
        <div className="Pokebattle-results">
          <h3>EXP : {exp1}</h3>
          <h1 className="Pokebattle-message">
            deck1 has {message(exp1, exp2)} -
             /- deck2 has {message(exp2, exp1)}
          </h1>
          <h3>EXP : {exp2}</h3>
        </div>
        <Pokedex data={deck2} isWinner={exp2 > exp1} />
      </div>
    )
  }
}
