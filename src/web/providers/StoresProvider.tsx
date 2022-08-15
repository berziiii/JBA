import React, { createContext, ReactNode, useContext } from 'react';
import { AppStore } from '../stores/AppStore';

interface DataStoreProviderProps {
  children: ReactNode;
  appStore: any;
}

const StoresContext = createContext({
  appStore: new AppStore(),
});

/* Hook to use stores in any functional component */
export const useAppStore = () => useContext(StoresContext).appStore;

const StoresProvider = ({ children, appStore }: DataStoreProviderProps) => {
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const stores = {
    appStore,
  };

  return <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>;
};

export default StoresProvider;
