import React, { Component } from 'react';
import './css/Pokedex.css';
import Pokecard from './Pokecard';

function getTemplate(data, isWinner) {
  const template = data.map(template => {
    return (
    <Pokecard 
    key={template.id}
    id={template.id} 
    name={template.name}
    type={template.type}
    base_experience={template.base_experience} 
    isWinner={isWinner}
    />
    );
  });
  return template;
}

export default class Pokedex extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="Pokedex">
          {getTemplate(data, this.props.isWinner)}
      </div>
    )
  }
}
