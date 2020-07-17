import React from 'react';

export class Card extends React.Component {
    render() {
        return (
            <div className={this.props.className ? `card ${this.props.className}` : 'card'}>
                {this.props.children}
            </div>
        );
    }
}