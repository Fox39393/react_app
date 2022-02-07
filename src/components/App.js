import MyButton from "./button/My-button"; 
import {useState} from 'react';
import ToggleButton from "./button/toggleButton";

const App = () => {
  
    const[buttonText, setButtonText] = useState(initialState:"click me");
    const [toggle, setToggle] = useState(initialState: false);
    return (
    <div className="App">
     <MyButton description="some button">{buttonText}</MyButton>
     <ToggleButton 
            toggle={toggle}
            setToggle={setToggle}
     >
       {toggle ? 'One' : 'Two'}
     </ToggleButton>
    </div>
    )
  ;
}

export default App;
