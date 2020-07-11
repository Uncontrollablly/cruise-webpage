import React from 'react';
import {Item} from './Item/Item';

export class Services extends React.Component {

    render() {
        return (
            <section>
                {this.props.services?.map(service => (
                    <Item
                        os={service.os}
                        name={service.name}
                        status={service.status}
                        ip={service.ip}
                        location={service.location}
                        resources={service.resources}
                        key={service.id}
                    />
                ))}
            </section>
        );
    }

}