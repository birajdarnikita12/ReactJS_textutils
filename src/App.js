import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState ('light');
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
