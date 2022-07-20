import React from 'react';
import { getCharacterById } from '../services/API';

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      thumbnail: {},
      urls: [],
    };
  }

  componentDidMount() {
    this.setCharacterById();
  }

  setCharacterById = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { results } = await getCharacterById(id);

    const { name, description, thumbnail, urls } = results[0];

    this.setState({
      name,
      description,
      thumbnail,
      urls,
    });
  };

  render() {
    const { name, description, thumbnail, urls } = this.state;
    return (
      <section>
        <img
          src={ `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}	` }
          alt="character"
        />
        <h1>{name}</h1>
        <p>{description}</p>
        <ul>
          {urls.map(({ url, type }) => (
            <li key={ type }>
              <a href={ url }>{url}</a>
            </li>)
          )}
        </ul>
      </section>
    );
  }
}

export default CharacterDetails;
