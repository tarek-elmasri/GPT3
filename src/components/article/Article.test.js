import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article Component', () => {
  test('Article Snapshot', () => {
    render(<Article />);
    expect(screen).toMatchSnapshot();
  });
});
