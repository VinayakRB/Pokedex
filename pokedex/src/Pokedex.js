import React, { Component } from 'react';
import './css/Pokedex.css';
import Pokecard from './Pokecard';

function getTemplate(data) {
  const template = data.map(template => {
    return (
    <Pokecard 
    key={template.id}
    id={template.id} 
    name={template.name}
    type={template.type}
    base_experience={template.base_experience} />
    );
  });
  return template;
}

export default class Pokedex extends Component {
  render() {
    const data = this.props.data;
    let template = getTemplate(data);
    return (
      <div>
        {/* <h1 className="Pokedex-title">POKEDEX</h1> */}
        <div className="Pokedex">
          {template}
        </div>
      </div>
    )
  }
}
