import React, { useContext, useReducer } from 'react'
import { initialState, storeReducer } from './reducer';
import { setOilPrices, setGoldPrices, setDollarPrices, setEuroPrices } from './actions';

const MyStoreContext = React.createContext({} as Value);

export interface Value {
  state:any;
  addOilData: (data: any) => void;
  addGoldData: (data: any) => void;
  addDollarData: (data: any) => void;
  addEuroData: (data: any) => void;
}

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

  const value:Value = {
    state,
    addOilData,
    addGoldData,
    addDollarData,
    addEuroData,
  }

  return (
    <MyStoreContext.Provider value={value as Value}>
      {children}
    </MyStoreContext.Provider>
  )
}

export const useStoreContext = ():Value => {
  const context = useContext<Value>(MyStoreContext);

  if(context === undefined) {
    throw new Error("useStoreContext must be used within the StoreContext component")
  }

  return context;
}