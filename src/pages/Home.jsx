import React from 'react';
import CharacterCard from '../components/CharacterCard';
import Header from '../components/Header';
import { getCharactersBySearch } from '../services/API';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      characters: [],
    };
  }

  componentDidMount() {
    // this.setAllCharacters();
  }

  /* setAllCharacters = async () => {
    const allCharacters = await getAllCharacters();
    this.setState({ characters: allCharacters.results });
  }; */

  searchCharacters = async () => {
    const { search } = this.state;
    const allCharacters = await getCharactersBySearch(search);
    this.setState({ characters: allCharacters.results });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleClick = () => {
    this.searchCharacters();
  };

  render() {
    const { search, characters } = this.state;
    return (
      <div>
        <Header />
        <main className="container">
          <div className="search-container">
            <input
              type="text"
              name="search"
              value={ search }
              onChange={ this.handleChange }
            />
            <button type="button" onClick={ this.handleClick }>
              Pesquisar
            </button>
          </div>
          <div className="cards-list">
            {!characters.length && <h1>Pesquise por um personagem</h1>}
            {!!characters.length &&
              characters.map((character) => (
                <CharacterCard
                  key={ character.id }
                  name={ character.name }
                  thumbnail={ character.thumbnail }
                  id={ character.id }
                />
              ))}
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
