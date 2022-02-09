import React, { useState } from 'react';
import button from './button.css';

const MyButton = ({children , changeText}) => {
    return <button className = {"button"} onClick={() =>changeText('Thanks')}>{children}</button>}
;

export default MyButton;