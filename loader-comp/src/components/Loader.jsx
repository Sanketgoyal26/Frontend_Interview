import { useState, useEffect } from 'react';
import './Loader.css'

const Loader = ({ value }) => {
    const [percentage, setPercentage] = useState(value);
    useEffect(() => {
        if (value <= 100 && value >= 0) {
            setPercentage(value);
        }
    }, [value]);

    return (
        <div className='loader_container'>
            <span className='loader_percentage'>
                {percentage}%
            </span>
            <div 
                className='loader_color' 
                style={{ width: `${percentage}%` }} 
            />
        </div>
    );
};

export default Loader;
