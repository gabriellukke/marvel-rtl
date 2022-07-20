import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  render() {
    const { name, thumbnail, id } = this.props;
    return (
      <div className="character-card">
        <img
          src={ `${thumbnail.path}/standard_fantastic.${thumbnail.extension}	` }
          alt="hero"
        />
        <div className="card-container">
          <h4>{name}</h4>
          <Link to={ `/character/${id}` }>Mais detalhes</Link>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
