import React from 'react';

export class Card extends React.Component {
    render() {
        return (
            <div className={`card ${this.props.name}`}>
                {this.props.children}
            </div>
        );
    }
}