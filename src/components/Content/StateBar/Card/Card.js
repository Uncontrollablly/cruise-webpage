import React from 'react';

export class Card extends React.Component {
    render() {
        return (
            <div className={this.props.name}>{this.props.children}</div>
        );
    }

}