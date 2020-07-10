import React from 'react';
import cent_os from '../../../../assets/os_icons/cent_os.png'
import debin from '../../../../assets/os_icons/debin.png'
import suse from '../../../../assets/os_icons/suse.png'
import ubuntu from '../../../../assets/os_icons/ubuntu.png'
import windows from '../../../../assets/os_icons/windows.png'

export class Item extends React.Component {

    constructor() {
        super();

        this.state = {
            cent_os,
            debin,
            suse,
            ubuntu,
            windows,
        }
    }

    createSourcesList = () =>
        this.props.resources.map((resource) =>
            <li>
                <label>
                    {resource}
                    <button className="icon-trash"/>
                </label>
            </li>
        );

    render() {
        return (
            <div className="item">
                <img
                    src={this.state[this.props.os]}
                    alt={this.props.os}
                />
                <div className="item-content">
                    <div className="first-line">
                        <div className="icon-desktop">
                            {this.props.name}
                        </div>
                        <div className="status">
                            {this.props.status}
                        </div>
                        <div className="icon-info">
                            {this.props.ip}
                        </div>
                        <div className="icon-folder">
                            {this.props.location}
                        </div>
                    </div>

                    <div className="second-line">
                        <ul>
                            <li>
                                <button className="icon-plus" />
                            </li>
                            {this.createSourcesList()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}