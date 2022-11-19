import { render, screen } from '@testing-library/react';
import Brand from './Brand';

describe('Brand Component', () => {
  test('Brand Snapshot', () => {
    render(<Brand />);
    expect(screen).toMatchSnapshot();
  });
});
