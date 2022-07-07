import React from 'react';
import Header from './Components/Header';
import Herosection from './Components/Herosection';
import Slide from './Components/Slider';
import Cards from './Components/Cards';
import Requirements from './Components/Requirements';
import Development from './Components/Development';
import Video from './Components/Video';
import Contact from './Components/Contact';
import Process from './Components/Process';
import Document from './Components/Document';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
        {/* <Header/> */}
        <Navbar/>
        <Herosection/>
        <Slide/>
        <Cards/>
        <Requirements/>
        <Development/>
        <Video/>
        <Contact/>
        <Process/>
        <Document/>
        <Footer/>
    </div>
  );
}

export default App;
