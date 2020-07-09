import React from 'react';

export class Navigation extends React.Component {

    render() {
        return (
          <nav>
              <ul>
                  <li>
                      <button>All</button>
                  </li>
                  <li>
                      <button>Physical</button>
                  </li>
                  <li>
                      <button>Virtual</button>
                  </li>
              </ul>
              <div className="icon-search">
                  <input type="text" />
              </div>
              <button className="icon-th-card" type="button"></button>
              <button className="icon-th-list" type="button"></button>
          </nav>
        );
    }

}