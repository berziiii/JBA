import React from 'react';
import { renderTestWithAppLoader } from '../../../../__tests__/TestHelper';
import Platform from '../Platform';
import { testForAxeViolations } from '../../../../__tests__/AxeUtil';

describe('Platform', () => {
  test('renders without axe violations', async () => {
    const wrapper = renderTestWithAppLoader(<Platform />);

    await testForAxeViolations(wrapper);
  });
});
