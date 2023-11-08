import React from "react";

import About from "./About";
import Features from "./Features";
import Header from "./Header";
import Skills from "./Skills";
import Quotes from "./Quotes";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Education from "./Education";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      <About />
      <Skills />
      <Quotes />
      <Education />
      <Contact />
      <Copyright />
    </React.Fragment>
  );
}

export default App;
