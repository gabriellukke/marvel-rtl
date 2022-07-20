import React from 'react';
import CharacterCard from '../components/CharacterCard';
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
      <main className="container">
        <div className="cards-list">
          {!!allCharacters.length &&
            allCharacters.map((character) => (
              <CharacterCard
                key={ character.id }
                name={ character.name }
                thumbnail={ character.thumbnail }
                id={ character.id }
              />
            ))}
        </div>
      </main>
    );
  }
}

export default Home;
