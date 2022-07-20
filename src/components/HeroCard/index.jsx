import React from 'react';

class HeroCard extends React.Component {
  render() {
    const { name, thumbnail } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <img src="" alt="hero" />
      </div>
    );
  }
}

export default HeroCard;
