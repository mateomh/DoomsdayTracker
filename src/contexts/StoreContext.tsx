import React, { useContext, useReducer } from 'react'
import { initialState, storeReducer } from './reducer';

const MyStoreContext = React.createContext({});

interface StoreContextProps {
  children: React.ReactNode;
}

export const StoreContext:React.FC<StoreContextProps> = ({children}) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <MyStoreContext.Provider value={[state, dispatch]}>
      {children}
    </MyStoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(MyStoreContext);