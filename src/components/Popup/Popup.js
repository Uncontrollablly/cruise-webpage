import React from 'react';

export class Popup extends React.Component {
    render() {
        return (
            <div>
                <button className="icon-close"/>
                <p>Separate multiple resource name with commas</p>
                <input type="text" placeholder="Input value"/>
                <button>
                    Add Resources
                </button>
                <button>
                    Cancel
                </button>
            </div>
        );
    }
}