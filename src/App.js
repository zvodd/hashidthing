import React from 'react';
import logo from './logo.svg';

import './App.css';
import HashIDStrings from './hashthing'

const App = () => {
    const teststring = "123Test"
    const thehash = HashIDStrings.stringToHashID(teststring)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
                    <h1>{teststring}</h1>
                    <h2>{HashIDStrings.hashIDToInts(thehash).join(',')}</h2>
                    <h2>{thehash}</h2>
                    <h2>{HashIDStrings.hashIDToString(thehash)}</h2>
        </p>
      </div>
    );
}

export default App;
