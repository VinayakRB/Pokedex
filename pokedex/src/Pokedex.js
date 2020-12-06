import React, { Component } from 'react';
import './css/Pokedex.css';
import Pokecard from './Pokecard';

function getRandom() {
  return Math.floor(Math.random() * 10) - 2;
}

function createDeck(data) {
  let counter = 0;
  let deck1 = [], deck2 = [];
  let deck1Exp = 0, deck2Exp = 0;
  while(counter < data.length)
  {
    let random = getRandom();
   if(!deck1.includes(data[random]) && !deck2.includes(data[random]) && random >= 0) {
     if(deck1.length < (data.length / 2)) {
       deck1.push(data[random]);
       deck1Exp += data[random].base_experience;
     } else {
      deck2.push(data[random]);
      deck2Exp += data[random].base_experience;
     }
     counter++;
   }
  }
  return {deck1, deck2, deck1Exp, deck2Exp};
}

function getTemplate(data, isWinning) {
  const template = data.map(template => {
    return (
    <Pokecard 
    key={template.id}
    id={template.id} 
    name={template.name}
    type={template.type}
    base_experience={template.base_experience} 
    isWinning={isWinning}
    />
    );
  });
  return template;
}

function getMessage(isWinning) {
  return isWinning ? 'Won' : 'Lost';
}

export default class Pokedex extends Component {
  render() {
    const data = this.props.data;
    const {deck1, deck2, deck1Exp, deck2Exp} = createDeck(data);
    const isWinning = deck1Exp > deck2Exp ? true : false;
    return (
      <div>
        <div className="Pokedex">
          {getTemplate(deck1, isWinning)}
    <h1 className="Pokedex-message">Deck 1 {getMessage(isWinning)} / Deck 2 {getMessage(!isWinning)}</h1>
          {getTemplate(deck2, !isWinning)}
        </div>
      </div>
    )
  }
}
