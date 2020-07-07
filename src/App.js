import React from "react";
import "./App.scss";
import "./assets/font_icons/fonts.css"
import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
  );
}

export default App;
