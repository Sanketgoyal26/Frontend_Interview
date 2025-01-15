import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage >= 0 && percentage < 100)
    setTimeout(() => {
      setPercentage(prev => prev + 1)
    }, 100)
  }, [percentage])

  return (
    <div className="App">
      <div className="loader-cntnr">
          <span className='loader-percentage'>{percentage}%</span>
          <div className='loader-color' style={{ width:  `${percentage}%`}} />
      </div>
    </div>
  );
}

export default App;
