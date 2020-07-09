import React from 'react';
import windows from '../../../assets/os_icons/windows.png'
import ubuntu from '../../../assets/os_icons/ubuntu.png'
import debin from '../../../assets/os_icons/debin.png'
import {Item} from './Item/Item';

export class Services extends React.Component {

    render() {
        return (
            <section>
                <Item>
                    <img src={windows} alt="windows" />
                    <div className="first-line">
                        <div className="url">
                            <i className="icon-desktop"></i>
                            <span>bjstdmngbgr01.thoughtworks.com</span>
                        </div>
                        <div className="state-idle">
                            idle
                        </div>
                        <div className="ip">
                            <i className="icon-info"></i>
                            <span>192.168.1.102</span>
                        </div>
                        <div className="path"><i className="icon-folder"></i>
                            <span>/var/lib/cruise-agent</span>
                        </div>
                    </div>
                    <div className="second-line">
                        <ul>
                            <li>
                                <i className="icon-plus"></i>
                            </li>
                            <li>
                                Firefox
                                <i className="icon-trash"></i>
                            </li>
                            <li>
                                Safari
                                <i className="icon-trash"></i>
                            </li>
                            <li>
                                Ubuntu
                                <i className="icon-trash"></i>
                            </li>
                            <li>
                                Chrome
                                <i className="icon-trash"></i>
                            </li>
                        </ul>
                    </div>
                </Item>

                <Item>
                    <img src={ubuntu} alt="ubuntu" />
                        <div className="first-line">
                            <div className="url">
                                <i className="icon-desktop"></i>
                                <span>bjstdmngbgr10.thoughtworks.com</span>
                            </div>
                            <div className="state-building">
                                building
                            </div>
                            <div className="ip">
                                <i className="icon-info"></i>
                                <span>192.168.1.80</span>
                            </div>
                            <div className="path"><i className="icon-folder"></i>
                                <span>/var/lib/cruise-agent</span>
                            </div>
                        </div>
                        <div className="second-line">
                            <ul>
                                <li>
                                    <i className="icon-plus"></i>
                                </li>
                                <li>
                                    Firefox
                                    <i className="icon-trash"></i>
                                </li>
                                <li>
                                    Safari
                                    <i className="icon-trash"></i>
                                </li>
                            </ul>
                            <div>
                                <i className="icon-deny"></i>
                                <button type="button">Deny</button>
                            </div>
                        </div>
                </Item>

                <Item>
                    <img src={debin} alt="debin" />
                        <div className="first-line">
                            <div className="url">
                                <i className="icon-desktop"></i>
                                <span>bjstdmngbgr11.thoughtworks.com</span>
                            </div>
                            <div className="state-building">
                                building
                            </div>
                            <div className="ip">
                                <i className="icon-info"></i>
                                <span>192.168.1.117</span>
                            </div>
                            <div className="path"><i className="icon-folder"></i>
                                <span>/var/lib/cruise-agent</span>
                            </div>
                        </div>
                        <div className="second-line">
                            <ul>
                                <li>
                                    <i className="icon-plus"></i>
                                </li>
                                <li>
                                    Firefox
                                    <i className="icon-trash"></i>
                                </li>
                                <li>
                                    Safari
                                    <i className="icon-trash"></i>
                                </li>
                                <li>
                                    Ubuntu
                                    <i className="icon-trash"></i>
                                </li>
                                <li>
                                    Chrome
                                    <i className="icon-trash"></i>
                                </li>
                            </ul>
                            <div>
                                <i className="icon-deny"></i>
                                <button type="button">Deny</button>
                            </div>
                        </div>
                </Item>
            </section>
        );
    }

}