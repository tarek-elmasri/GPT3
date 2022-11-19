import { render, screen } from '@testing-library/react';
import Blog from './Blog';

describe('Blog Container', () => {
  test('Blog Container Snapshot', () => {
    render(<Blog />);
    expect(screen).toMatchSnapshot();
  });
});
