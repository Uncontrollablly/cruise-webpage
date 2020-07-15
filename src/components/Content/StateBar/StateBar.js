import React from 'react';
import {Card} from './Card/Card'

export class StateBar extends React.Component {
    render() {
        return (
            <div className='state-bar'>
                <Card name='icon-cog'>
                    <div className='state'>Building</div>
                    <div className='state-number'>{this.props.status.building}</div>
                </Card>
                <Card name='icon-coffee'>
                    <div className='state'>Idle</div>
                    <div className='state-number'>{this.props.status.idle}</div>
                </Card>
                <Card>
                    <table>
                        <thead>
                            <tr>
                                <th>ALL</th>
                                <th>PHYSICAL</th>
                                <th>VIRTUAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8</td>
                                <td>{this.props.types.physical}</td>
                                <td>{this.props.types.virtual}</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        );
    }
}