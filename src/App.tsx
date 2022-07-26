import React, { useEffect, useState } from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
import DaysBar from './components/DaysBar';
import DaysButton from './components/DaysButton';
import NormalizedChartComponent from './components/NormalizedChartComponent';
import { useStoreContext } from './contexts/StoreContext';
import { getCurrencyPrices, getGoldPrices, getOilPrices } from './utils/api_calls';
import { processFullData, processGoldPrices, processOilPrices} from './utils/data_handling';

function App() {
  const store = useStoreContext();
  const [days, setDays] = useState(180);
  const buttonContents = [
    {label: "6 months", value: 180},
    {label: "1 year", value: 365},
    {label: "3 years", value: 1095},
    {label: "5 years", value: 1825}
  ]

  const getData = async () => {
    let {data} = await getOilPrices();
    const oilData = processOilPrices(data, days);
    let {data: data2} = await getGoldPrices();
    const goldData = processGoldPrices(data2, days);
    const currencyData = await getCurrencyPrices(days);
    const fullData = processFullData(oilData,goldData, currencyData, days);
    store.addFullData(fullData)
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <div className="App">
      <DaysBar>
        {
          buttonContents.map((content) => {
            return(
              <DaysButton
                key={content.label}
                text={content.label}
                value={content.value}
                setDays={setDays}
                selected={days === content.value}
              />
            )
          })
        }
      </DaysBar>
      <ChartComponent />
      <hr/>
      <NormalizedChartComponent />
    </div>
  );
}

export default App;
