import { useState, useEffect } from 'react';
import { cities } from './constants';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [iPCities, setIPCities] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value)
    const filteredCities = cities.filter((city) => {
      return city.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setIPCities(filteredCities);

    if (event.target.value === '') {
      setIPCities([]);
    }
  }

  const applySelectedValue = (city) => {
    setValue(city)
    setIPCities([]);
  }
  return (
    <div className="App">
      <input value={value} className="input-field" type="text" onChange={handleChange}/>
      <ul className="city-list">
        {
          iPCities.map((city, index) => {
            return <li key={index} className='list-item' onClick={()=>applySelectedValue(city)}>{city}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
