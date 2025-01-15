import { useState } from 'react';
import Cell from './components/Cell';
import './App.css';

function App() {
  const [orders, setOrders] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const activateCell = (index) => {
    if (orders.includes(index)) {
      return;
    }
    const newOrders = [...orders, index];
    if (newOrders.length === config.flat().filter(Boolean).length) {
      deActivateCells()
    }
    setOrders(newOrders);
  }

  const deActivateCells = () => {
    setIsDeactivating(true)
    const timeOut = setInterval(() => {
      setOrders(prevOrders => {
        const newOrders = prevOrders.slice();
        newOrders.pop();

        if (newOrders.length === 0) {
          clearInterval(timeOut);
          setIsDeactivating(false)
        }

        return newOrders;
      })
    }, 300)
  }

  return (
    <div className="Wrapper">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
        {
          config.flat().map((elem, index) => {
            return elem ? <Cell
              key={index}
              filled={orders.includes(index)}
              onClick={() => activateCell(index)}
              isDisabled={isDeactivating}
            /> : <span key={index}></span>
          })
        }
      </div>
    </div>
  );
}

export default App;
