import { render, screen } from '@testing-library/react';
import Features from './Features';

describe('Features Container', () => {
  test('Features Container Snapshot', () => {
    render(<Features />);
    expect(screen).toMatchSnapshot();
  });
});
