import React from 'react';
import {History} from '../History/History';

export class Menu extends React.Component {
    render() {
        return (
            <aside className='menu'>
                <div className='menu-container'>
                    <button className='icon-dashboard'>DASHBOARD</button>
                    <button className='icon-sitemap'>AGENT</button>
                    <button className='icon-boat'>MY CRUISE</button>
                    <button className='icon-life-bouy'>HELP</button>
                    <History/>
                </div>
            </aside>
        );
    }
}