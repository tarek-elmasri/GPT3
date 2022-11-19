import { render, screen } from '@testing-library/react';
import WhatGPT3 from './WhatGPT3';

describe('WhatGPT3 Component', () => {
  test('WhatGPT3 Snapshot', () => {
    render(<WhatGPT3 />);
    expect(screen).toMatchSnapshot();
  });
});
