import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterCard from '.';

describe('CharacterCard unit test', () => {
  it('Render', () => {
    const componentProps = {
      name: 'Thor',
      thumbnail: {
        path: '',
        extension: 'jpg',
      },
      id: '1234',
    }

    render(<CharacterCard {...componentProps} />);

    expect(screen.getByText('Thor')).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  })
})