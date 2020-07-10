import React from 'react';
import {Item} from './Item/Item';

export class Services extends React.Component {

    render() {
        return (
            <section>
                <Item
                    os='windows'
                    name='bjstdmngbgr01.thoughtworks.com'
                    status='idle'
                    ip='192.168.1.102'
                    location='/var/lib/cruise-agent'
                    resources={['Firfox', 'Safari', 'Ubuntu', 'Chrome']}
                />
            </section>
        );
    }

}