import { render, screen } from '@testing-library/react';
import { Possibility } from '..';

describe('Possibility Container', () => {
  test('Possibility container Snapshot', () => {
    render(<Possibility />);
    expect(screen).toMatchSnapshot();
  });
});
