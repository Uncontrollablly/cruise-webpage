import React from 'react';
import {StateBar} from './StateBar/StateBar';
import {Navigation} from './Navigation/Navigation';

export class Content extends React.Component {
    render() {
        return (
          <main className="main-content">
              <div className="content-wrapper">
                  <StateBar />
                  <Navigation />
                  {/*<Servives />*/}
              </div>
          </main>
        );
    }
}