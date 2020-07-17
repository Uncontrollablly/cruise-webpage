import React from 'react';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
      <>
        <Header />
        <div className="content">
            <Menu />
            <Content />
        </div>
        <Footer />
      </>
  );
}

export default App;
