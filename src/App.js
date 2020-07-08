import React from 'react';
import './assets/font_icons/fonts.css'
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';
import './scss/index.scss'

function App() {
  return (
      <div className="cruise">
        <Header />
        <div className="content">
            <Menu />
            <Content />
        </div>
        <Footer />
      </div>
  );
}

export default App;
