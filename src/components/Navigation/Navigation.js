import React from 'react';

export class Navigation extends React.Component {
    state = {
        checkedButton: 'all',
    }

    onClick = (e) => {
        if (!e.target.classList.contains(this.state.checkedButton)) {
            const oldButton = document.getElementsByClassName(this.state.checkedButton)[0];
            oldButton.classList.remove('checked');
            this.setState({
                checkedButton: e.target.className,
            });
            e.target.classList.add('checked');
        }
    }

    render() {
        return (
          <nav>
              <ul>
                  <li>
                      <button className='all checked' onClick={this.onClick}>All</button>
                  </li>
                  <li>
                      <button className='physical' onClick={this.onClick}>Physical</button>
                  </li>
                  <li>
                      <button className='virtual' onClick={this.onClick}>Virtual</button>
                  </li>
              </ul>
              <div className="icon-search">
                  <input type="text" />
              </div>
              <button className="icon-th-card" type="button" />
              <button className="icon-th-list" type="button" />
          </nav>
        );
    }

}