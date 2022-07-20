import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('App', () => {
  it('Renderiza o App', () => {
    renderWithRouter(<App/>);
  })
})
