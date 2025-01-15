import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(()=> {
      setValue((prev)=> prev+1);
    }, 100)
  }, [value]);

  return (
    <div className="App">
      <Loader value={value}/>
    </div>
  );
}

export default App;
