// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppStore } from '../web/stores/AppStore';
import StoresProvider from '../web/providers/StoresProvider';

/* eslint-disable func-names */
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

export const renderTestWithAppLoader = (component: ReactElement, routerEnabled = true) => {
  const appStore = new AppStore();

  const wrapper = <StoresProvider appStore={appStore}>{component}</StoresProvider>;

  return render(routerEnabled ? <BrowserRouter>{wrapper}</BrowserRouter> : wrapper);
};
