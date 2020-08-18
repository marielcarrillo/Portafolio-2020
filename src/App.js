import React from 'react';
import About from './components/About/About'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='triangle-about'></div>
      <About/>
    <div className='web-view'>
      <div className='triangle-dev'></div>
      <div className='triangle-contact'></div>
    </div>
    <div className='skill-view'>
      <div className='triangle-skills'></div>
      <div className='triangle-skills-right'></div> 
    </div>
    </div>
  );
}

export default App;