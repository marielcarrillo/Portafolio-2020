import React from 'react';

import RouterDom from './components/Router/Router';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import DevWeb from './components/DevWeb/DevWeb';
import Design from './components/Design/Design';
import Contact from './components/Contact/Contact';


import './App.scss';

function App() {

  return (
    <div className="App" id='app'>
        <About />
        <div className='triangle-about'/>
        <RouterDom />    
      <div className='web-view'>
        <div className='triangle-design'/>
        <Design />   
        <div className='triangle-contact'/>
         <Contact />     
      </div>
      <div className='skill-view'>
        <div className='triangle-skills'/>
        <Skills />
        <div className='triangle-dev'/>
        <DevWeb />
      </div>
    </div> 
  )
}

export default App;