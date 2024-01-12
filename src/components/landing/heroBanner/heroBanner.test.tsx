import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroBanner from '.';

describe('HeroBanner Component', () => {
  it('renders without crashing', () => {
    render(<HeroBanner />);
  });

  // You can add more specific tests based on your component's behavior
  it('renders the intro text correctly', () => {
    const { getByText } = render(<HeroBanner />);
    const introText = getByText(/The most competitive 3rd-person shooter/);
    expect(introText).toBeInTheDocument();
  });

});
