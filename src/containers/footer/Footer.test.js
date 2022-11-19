import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Container', () => {
  test('Footer Container Snapshot', () => {
    render(<Footer />);
    expect(screen).toMatchSnapshot();
  });
});
