import React from 'react';
import logo from '../../assets/logo/logo.svg'
import avatar from '../../assets/logo/avatar.jpg'

export class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="logo" src={logo} alt="logo" />
                <img className="avatar" src={avatar} alt="avatar" />
            </header>
        );
    }
}