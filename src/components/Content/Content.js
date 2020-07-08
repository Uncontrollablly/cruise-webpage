import React from 'react';
import {StateBar} from './StateBar/StateBar';

export class Content extends React.Component {
    render() {
        return (
          <main className="main-content">
              <StateBar />
          </main>
        );
    }
}