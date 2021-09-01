import React from 'react';
import Nav from './components/Nav';
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero id='home'/>
      <Projects id='projects'/>
      <About id='about'/>
      <Connect id='connect'/>
    </div>
  );
}

export default App;
