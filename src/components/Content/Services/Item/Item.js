import React from 'react';
import cent_os from '../../../../assets/os_icons/cent_os.png'
import debin from '../../../../assets/os_icons/debin.png'
import suse from '../../../../assets/os_icons/suse.png'
import ubuntu from '../../../../assets/os_icons/ubuntu.png'
import windows from '../../../../assets/os_icons/windows.png'

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
        return this.props.service.resources.map((resource, index) =>
            <li key={String(this.props.service.id) + index}>
                <button
                    className="icon-trash"
                    onClick={this.props.handleDeleteResource(this.props.service.id, resource)}
                >
                    {resource}
                </button>
            </li>
        );
    }

    render() {
        return (
            <div className="item">
                <img
                    src={this.state[this.props.service.os]}
                    alt={this.props.service.os}
                />
                <div className="item-content">
                    <div className="first-line">
                        <div className="icon-desktop">
                            {this.props.service.name}
                        </div>
                        <div className="status">
                            {this.props.service.status}
                        </div>
                        <div className="icon-info">
                            {this.props.service.ip}
                        </div>
                        <div className="icon-folder">
                            {this.props.service.location}
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