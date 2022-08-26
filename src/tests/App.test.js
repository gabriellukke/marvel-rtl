import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import searchedCharactersResponse from './mocks/searchedCharacters';
import character from './mocks/character';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  /* afterEach(() => {
    global.fetch.mockClear();
  }); */

  it('Renderiza o App', () => {
    renderWithRouter(<App/>);

    const homeTitle = screen.getByRole('heading', { name: 'Marvel Characters' });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Teste do input', () => {
    renderWithRouter(<App />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'thor');
    expect(input).toHaveValue('thor');
  });

  it('Teste da chamada da API', async () => {
    /* global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(searchedCharactersResponse)
    }) */

    /* jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(searchedCharactersResponse)
    }); */

    jest.spyOn(global, 'fetch').mockImplementation(async (url) => {
      if (url.includes('thor')) {
        return {
          ok: true,
          json: async () => searchedCharactersResponse,
        }
      }
    });

    renderWithRouter(<App />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.type(input, 'thor');
    userEvent.click(button);

    const card = await screen.findAllByText(/thor/i);
    expect(card.length).toBe(8)
  })

  it('Teste da chamada da API com os dois endpoints', async () => {
    /* global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(searchedCharactersResponse)
    }) */

    /* jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(searchedCharactersResponse)
    }); */

    jest.spyOn(global, 'fetch').mockImplementation(async (url) => {
      if (url.includes('thor')) {
        return {
          ok: true,
          json: async () => searchedCharactersResponse,
        }
      }

      if (url.includes('1009664')) {
        return {
          ok: true,
          json: async () => ({
            code: 200,
            copyright: '© 2022 MARVEL',
            data: {
              limit: 20,
              results: character,
            },
            status: 'OK',
          }),
        }
      }
    });

    renderWithRouter(<App />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.type(input, 'thor');
    userEvent.click(button);

    const cards = await screen.findAllByText(/thor/i);
    expect(cards.length).toBe(8)

    const cardLink = screen.getAllByRole('link', { name: /mais detalhes/i });
    userEvent.click(cardLink[0]);

    const characterName = await screen.findByText('Thor');
    expect(characterName).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  })
})
