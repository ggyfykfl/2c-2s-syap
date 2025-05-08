import React, { useState } from "react";
import Button from './Button';
import './App.css';

const Counter: React.FC = () => { 
    const [count, setCount] = useState(0); 
    const increase = () => setCount(current => current + 1); 
    const reset = () => setCount(0); 
     
    return ( 
    <div className="back"> 
    <div className="counter-border">
      <div className="flexCount">
      <h1 className={count === 5 ? 'count-red' : ''}>{count}</h1>
      </div> 
      <div>
      <Button 
        title="inc" 
        callback={increase} 
        disabled={count >= 5} 
      /> 
      <Button 
        title="reset" 
        callback={reset} 
        disabled={count === 0} 
      /> 
      </div>
      </div>
    </div> 
    ); 
}; 

export default Counter;

