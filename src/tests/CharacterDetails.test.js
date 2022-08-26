import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import searchedCharactersResponse from './mocks/searchedCharacters';
import character from './mocks/character';
import userEvent from '@testing-library/user-event';
import CharacterDetails from '../pages/CharacterDetails';

describe('Details', () => {
  it('Render', async () => {
    renderWithRouter(<CharacterDetails match={ { params: { id: '1009664' } } }/>, ['/character/1009664']);

    await screen.findByText('Thor');
    screen.logTestingPlaygroundURL();
  })
})
