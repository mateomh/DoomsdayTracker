import React, { useContext, useReducer } from 'react'
import { initialState, storeReducer } from './reducer';
import { setOilPrices, setGoldPrices, setDollarPrices, setEuroPrices } from './actions';

const MyStoreContext = React.createContext({});

interface StoreContextProps {
  children: React.ReactNode;
}

export const StoreContext:React.FC<StoreContextProps> = ({children}) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // create functions to use the dispatch here and send them as the value for the context
  // functions like add dollar price etc

  const addOilData = (data: any) => {
    dispatch(setOilPrices(data))
  }

  const addGoldData = (data: any) => {
    dispatch(setGoldPrices(data))
  }

  const addDollarData = (data: any) => {
    dispatch(setDollarPrices(data))
  }

  const addEuroData = (data: any) => {
    dispatch(setEuroPrices(data))
  }

  const value = {
    state,
    addOilData,
    addGoldData,
    addDollarData,
    addEuroData,
  }

  return (
    <MyStoreContext.Provider value={value}>
      {children}
    </MyStoreContext.Provider>
  )
}

export const useStoreContext = () => {
  const context = useContext(MyStoreContext);

  if(context === undefined) {
    throw new Error("useStoreContext must be used within the StoreContext component")
  }

  return context;
}