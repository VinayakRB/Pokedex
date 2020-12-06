import React, { Component } from 'react';
import './css/Pokecard.css';

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

function addPadding(id) {
  const num = String(id);
  return num.padStart(3, "0");
}

export default class Pokecard extends Component {
  render() {
    const props = this.props;
    const source = `${POKE_API}${addPadding(props.id)}.png`;
    const cardClass = this.props.isWinner
    ? 'Pokecard Pokecard-won' : 'Pokecard Pokecard-lost';
    
    return (
      <div className={cardClass}>
        <h3 className="Pokecard-h3">{[props.name]}</h3>
        <img src={source} alt={props.name}/>
        <p>Type: {props.type}</p>
        <p>EXP: {props.base_experience}</p>
      </div>
    )
  }
}