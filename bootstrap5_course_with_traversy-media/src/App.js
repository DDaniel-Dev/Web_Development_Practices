import React from 'react';
import Navbar from './components/includes/Navbar';
import Showcase from './components/includes/Showcase';
import Newsletter from './components/includes/Newsletter';
import Projects from './components/includes/Projects';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Showcase/>
      <Newsletter/>
      <Projects/>
    </div>
  );
}

export default App;
