import React, { useEffect, useState } from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
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

  return (
    <div className="App">
      <ChartComponent />
    </div>
  );
}

export default App;
