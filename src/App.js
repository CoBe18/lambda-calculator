import React, { useState } from 'react';
import './App.css';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from './components/DisplayComponents/Logo';
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';

function App() {
  let [display, setDisplay] = useState({
    current: 0
  });

  console.log(display.current);
  return (
    <div className="container">
      <Logo />
      <Display display={display.current} />
      <div className="App">
        <div>
          <Operators />
        </div>
        <div>
          <div>
            <Specials />
          </div>
          <div>
            <Numbers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;