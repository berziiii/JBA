import React from 'react';
import { renderTestWithAppLoader } from '../../../../__tests__/TestHelper';
import { testForAxeViolations } from '../../../../__tests__/AxeUtil';
import VideoLibrary from '../VideoLibrary';

describe('VideoLibrary', () => {
  test('renders without axe violations', async () => {
    const wrapper = renderTestWithAppLoader(<VideoLibrary />);

    await testForAxeViolations(wrapper);
  });
});
