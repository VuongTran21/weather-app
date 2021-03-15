import React from 'react';
import { render } from '@testing-library/react';

import ForecastItem from '../ForecastItem';

describe('ForecastItem Component', () => {
  it('should render forecast item', () => {
    const props = {
      id: 1,
      weather_state_abbr: 'icon',
      applicable_date: '2021-03-15',
      min_temp: 18,
      max_temp: 20
    };

    const { container } = render(<ForecastItem forecast={props} />);
    expect(container).toMatchSnapshot();
  });
});
