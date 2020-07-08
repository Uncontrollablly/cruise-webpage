import React from 'react';

export class Card extends React.Component {
    render() {
        const backgroundColor = {
            backgroundColor: this.props.color || "#FFFFFF"
        }
        return (
            <div className={`card ${this.props.name}`}
                style={backgroundColor}
            >
                {this.props.children}
            </div>
        );
    }

}