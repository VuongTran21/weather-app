import React from 'react';
import { render } from '@testing-library/react';

import Search from '../Search';

describe('Search Component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Search onForecastChange={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
