import "./App.css";
import React from "react";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Banner from "./components/banner/banner.component";

import "./scss/main.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
    </div>
  );
};

export default App;
