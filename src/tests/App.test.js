import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Integração', () => {
  it('Renderiza o App', () => {
    render(<App />);
  })
})
