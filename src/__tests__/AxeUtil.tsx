import { toHaveNoViolations, configureAxe as configureAxeJest } from 'jest-axe';
import { act } from 'react-dom/test-utils';

expect.extend(toHaveNoViolations);

/**
 * Configure the axe object used for a11y unit testing
 * @param {Object} rules an object with a dictionary of rules that will apply
 *   to the currently running test
 *   see https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure
 *   for list of rule object keys
 * @returns axe test object
 */
const configureAxe = (rules: {}) => {
  const globalRules = [
    {
      id: 'region',
      // disable rule requiring that region landmarks be present
      // this allows individual components to be tested
      enabled: false,
    },
    /**
     * the following rule disables certain checks against react-select, which is known
     * to have some a11y issues, but is out of our control
     * in order to determine the selector value for these entries, we look up the
     * existing selector entry for this rule from the axe-core json files here
     * https://github.com/dequelabs/axe-core/tree/master/lib/rules,
     * then add in a filter like '::not([class="Select*"])',
     * which would remove any react-select inputs
     */
    // uuid is mocked for jest which causes this issue to get flagged, especially for react-select
    // components. In the future we may need to compeltely disable it by default
    {
      id: 'duplicate-id-aria',
      selector: 'input::not([aria-activedescendant="react-select*"]), textarea',
    },
    {
      id: 'aria-required-parent',
      selector: '[role]::not([class="Select*"])',
    },
  ];

  return configureAxeJest({
    globalOptions: {
      rules: globalRules,
    },
    rules,
  });
};

/**
 * Test a given wrapper component for axe violatons, optionally passing in rules to override
 * @param {ReactWrapper} wrapper wrapper object from Enzyme to test for violations - must be mounted already
 * @param {Object} rules an object with a dictionary of rules that will apply
 *   to the currently running test
 *   see https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure
 *   for list of rule object keys
 */
export const testForAxeViolations = async (wrapper: any, rules = {}) => {
  await act(async () => {
    const configAxe = configureAxe(rules);
    const results = await configAxe(wrapper.container);

    expect(results).toHaveNoViolations();
  });
};
