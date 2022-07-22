import React, { useEffect, useState } from 'react';
import './App.css';
import { useStoreContext } from './contexts/StoreContext';
import { getCurrencyPrices, getGoldPrices, getOilPrices } from './utils/api_calls';
import { processFullData} from './utils/data_handling';

function App() {
  const store = useStoreContext();
  const [days, setDays] = useState(99);

  const getData = async () => {
    const oilData = await getOilPrices();
    const goldData = await getGoldPrices();
    const currencyData = await getCurrencyPrices(99);
    const fullData = processFullData(oilData,goldData, currencyData);

    store.addFullData(fullData)
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
