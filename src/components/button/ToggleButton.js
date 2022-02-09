import React from 'react';
import button from './tgButton.css';

const ToggleButton = ({toggle, setToggle, chirdren}) => {
return (
     <button className={toggle ? 'button-red : button-green'}
      onClick={() => setToggle(!toggle)}>{chirdren}</button>
)
    };

export default ToggleButton;