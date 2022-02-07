import React from 'react';

const ToggleButton = ({toggle, setToggle, chirdren}) => {
return <button onClick={() => setToggle(!toggle)}>{chirdren}</button>
};

export default ToggleButton;