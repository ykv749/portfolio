import React from 'react';
import Navigationbar from "./components/navbar";
import ImgOverlay from "./components/starter";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Education from './components/education';

function App() {
  return (
      <div>
          <Navigationbar />
          <ImgOverlay />
          <Skills />
          <Education />
          <Footer />
      </div>
  );
}

export default App;
