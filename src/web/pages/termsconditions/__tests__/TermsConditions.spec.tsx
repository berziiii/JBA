import React from 'react';
import { renderTestWithAppLoader } from '../../../../__tests__/TestHelper';
import { testForAxeViolations } from '../../../../__tests__/AxeUtil';
import TermsConditions from '../TermsConditions';

describe('TermsConditions', () => {
  test('renders without axe violations', async () => {
    const wrapper = renderTestWithAppLoader(<TermsConditions />);

    await testForAxeViolations(wrapper);
  });
});
