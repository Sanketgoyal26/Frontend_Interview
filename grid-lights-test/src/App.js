import { useState } from 'react';
import Card from './Components/Card';
import './App.css';

function App() {
  const [orders, setOrders] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false)
  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]    
  ]

  const addTileToOrder = (index) => {
    if (orders.includes(index)) {
      return;
    }

    const newOrders = [...orders, index]
    setOrders(newOrders);
    if (newOrders.length === config.flat().filter(Boolean).length) {
      deactivateCells();
    }
  }

  const deactivateCells = () => {
    setIsDeactivating(true)
    const timeOut = setInterval(() => {
      setOrders(prevOrders => {
        const newOrders = prevOrders.slice();
        newOrders.pop();

        if (newOrders.length === 0) {
          setIsDeactivating(false);
          clearInterval(timeOut);
        }
        return newOrders;
      })
    }, 300)
  }

  return (
    <div className="App">
      <div className="grid-container" style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
        {
          config.flat().map((tile, index) => {
            return tile ? <Card isDisabled={isDeactivating} onClick={() => addTileToOrder(index)}  isClicked={orders.includes(index)} key={index} /> : <span key={index}></span>
          })
        }
      </div>
    </div>
  );
}

export default App;
