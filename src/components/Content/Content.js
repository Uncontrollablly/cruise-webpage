import React from 'react';
import {StateBar} from './StateBar/StateBar';
import {Navigation} from './Navigation/Navigation';
import {Service} from './Service/Service';

export class Content extends React.Component {
    render() {
        return (
          <main className="main-content">
              <div className="content-wrapper">
                  <StateBar />
                  <Navigation />
                  <Service />
              </div>
          </main>
        );
    }
}