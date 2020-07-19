import React from 'react';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';
import {Content} from './components/Content/Content';
import {Footer} from './components/Footer/Footer';
import {HistoryContext} from "./history-context";

class App extends React.Component {
    state = {
        historyList: [],
        addHistory: (text) => {
            this.setState({
                historyList: [...this.state.historyList, text]
            })
        }
    }

    render() {
      return (
          <div className="cruise">
              <Header />
              <div className="content">
                  <HistoryContext.Provider value={this.state}>
                      <Menu />
                      <Content />
                  </HistoryContext.Provider>
              </div>
              <Footer />
          </div>
      );
  }
}

export default App;
