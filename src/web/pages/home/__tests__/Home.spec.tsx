import React from 'react';
import { renderTestWithAppLoader } from '../../../../__tests__/TestHelper';
import Home from '../Home';
import { testForAxeViolations } from '../../../../__tests__/AxeUtil';

describe('Home', () => {
  test('renders without axe violations', async () => {
    const wrapper = renderTestWithAppLoader(<Home />);

    await testForAxeViolations(wrapper);
  });
});
