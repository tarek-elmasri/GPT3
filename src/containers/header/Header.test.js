import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('Header Component Snapshot', () => {
    render(<Header />);
    expect(screen).toMatchSnapshot();
  });
});
