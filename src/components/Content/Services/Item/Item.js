import React from 'react';

export class Item extends React.Component {
    render() {
        return (
            <section className="item">
                {this.props.children}
            </section>
        );
    }
}