import React, { useEffect, useState } from 'react';
import './App.css';
import { useStoreContext } from './contexts/StoreContext';
import { getCurrencyPrices, getGoldPrices, getOilPrices } from './utils/api_calls';
import { processCurrencyData, processGoldPrices, processOilPrices } from './utils/data_handling';

function App() {
  const store = useStoreContext();
  const [days, setDays] = useState(99);

  const getData = async () => {
    let data = await getOilPrices();
    let processedData = processOilPrices(data, days);
    store.addOilData(processedData);

    data = await getGoldPrices();
    processedData = processGoldPrices(data, days);
    store.addGoldData(processedData);

    data = await getCurrencyPrices(10);
    processCurrencyData(data);
    // store.addGoldData(processedData);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("%%%%%%%%%%%%%%%%%% STATE", store);

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
