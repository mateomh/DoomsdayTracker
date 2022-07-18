import React, { useEffect } from 'react';
import './App.css';
import { useStoreContext } from './contexts/StoreContext';
import { getCurrencyPrices, getGoldPrices } from './utils/api_calls';

function App() {
  
  useEffect(() => {
    getCurrencyPrices(10);
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
