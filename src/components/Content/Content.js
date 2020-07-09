import React from 'react';
import {StateBar} from './StateBar/StateBar';
import {Navigation} from './Navigation/Navigation';
import {Services} from './Services/Services';

export class Content extends React.Component {
    render() {
        return (
          <main className="main-content">
              <div className="content-wrapper">
                  <StateBar />
                  <Navigation />
                  <Services />
              </div>
          </main>
        );
    }
}