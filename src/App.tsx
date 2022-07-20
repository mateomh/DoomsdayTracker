import React, { useEffect } from 'react';
import './App.css';
import { useStoreContext } from './contexts/StoreContext';
import { getCurrencyPrices, getGoldPrices, getOilPrices } from './utils/api_calls';

function App() {
  
  const getPrices = async () => {
    const data = await getOilPrices();
    console.log(data.dataset_data.data[0][1]);
  }

  useEffect(() => {
    getPrices();
  }, []);

  const state = useStoreContext();

  console.log("%%%%%%%%%%%%%%%%%% STATE", state);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
