import React from "react";
import './App.css';

interface ButtonProps { 
  title: string;  
  callback: () => void; 
  disabled?: boolean; 
} 

const Button: React.FC<ButtonProps> = 
({ title, callback, disabled }) => { 
  return ( 
  <button
    onClick={callback} 
    disabled={disabled}
  > 
    {title} 
  </button> 
  ); 
}; 

export default Button;