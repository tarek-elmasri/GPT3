import { render, screen } from '@testing-library/react';
import CTA from './CTA';

describe('CTA Component', () => {
  test('CTA Snapshot', () => {
    render(<CTA />);
    expect(screen).toMatchSnapshot();
  });
});
