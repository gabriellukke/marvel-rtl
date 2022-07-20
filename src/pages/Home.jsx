import React from 'react';
import HeroCard from '../components/HeroCard';
import { getAllCharacters } from '../services/API';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCharacters: [],
    };
  }

  componentDidMount() {
    this.setAllCharacters();
  }

  setAllCharacters = async () => {
    const allCharacters = await getAllCharacters();
    this.setState({ allCharacters: allCharacters.results });
  };

  render() {
    const { allCharacters } = this.state;
    return (
      <div>
        {!!allCharacters.length && allCharacters.map((character) => (
          <HeroCard key={ character.id } name={ character.name } />
        ))}
      </div>
    );
  }
}

export default Home;
