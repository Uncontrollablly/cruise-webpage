import React from 'react';
import cent_os from '../../assets/os_icons/cent_os.png'
import debin from '../../assets/os_icons/debin.png'
import suse from '../../assets/os_icons/suse.png'
import ubuntu from '../../assets/os_icons/ubuntu.png'
import windows from '../../assets/os_icons/windows.png'

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            centos: cent_os,
            debian: debin,
            suse,
            ubuntu,
            windows,
        }
    }

    createSourcesList = () => {
        const id = this.props.service.id;
        return this.props.service.resources.map((resource, index) =>
            <li key={String(id) + index}>
                <button
                    className="icon-trash"
                    onClick={this.props.handleDeleteResource(id, resource)}
                >
                    {resource}
                </button>
            </li>
        );
    }

    render() {
        const {os, name, status, ip, location, id} = this.props.service;
        return (
            <div className="item">
                <img
                    src={this.state[os]}
                    alt={os}
                />
                <div className="item-content">
                    <div className="first-line">
                        <div className="icon-desktop">
                            {name}
                        </div>
                        <div className={status}>
                            {status}
                        </div>
                        <div className="icon-info">
                            {ip}
                        </div>
                        <div className="icon-folder">
                            {location}
                        </div>
                    </div>

                    <div className="second-line">
                        <ul>
                            <li>
                                <button className="icon-plus" onClick={this.props.handleClickAdd(id)}/>
                            </li>
                            {this.createSourcesList()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}