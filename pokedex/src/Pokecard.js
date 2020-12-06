import React, { Component } from 'react';
import './css/Pokecard.css';

function addPadding(id) {
  const num = String(id);
  return num.padStart(3, "0");
}

export default class Pokecard extends Component {
  render() {
    const props = this.props;
    const classes = props.isWinning 
    ? 'Pokecard Pokecard-won' 
    : 'Pokecard Pokecard-lost';
    const source = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addPadding(props.id)}.png`;
    return (
      <div className={classes}>
        <h3 className="Pokecard-h3">{[props.name]}</h3>
        <img src={source} alt={props.name}/>
        <p>Type: {props.type}</p>
        <p>EXP: {props.base_experience}</p>
      </div>
    )
  }
}