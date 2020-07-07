import React from "react";

export class Menu extends React.Component {
    render() {
        return (
            <aside>
                <ul>
                    <li>
                        <i className="icon-dashboard"></i>
                        <span>DASHBOARD</span>
                    </li>
                    <li>
                        <i className="icon-sitemap"></i>
                        <span>AGENT</span>
                    </li>
                    <li>
                        <i className="icon-boat"></i>
                        <span>MY CRUISE</span>
                    </li>
                    <li>
                        <i className="icon-life-bouy"></i>
                        <span>HELP</span>
                    </li>
                </ul>
            </aside>
        );
    }
}