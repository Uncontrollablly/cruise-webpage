import React from 'react';
import {Card} from './Card/Card'

export class StateBar extends React.Component {
    render() {
        return (
            <div className='state-bar'>
                <Card name='icon-cog' color='#FFB900'>
                    <div className='state'>Building</div>
                    <div className='state-number'>3</div>
                </Card>
                <Card name='icon-coffee' color='#7FBC39'>
                    <div className='state'>Idle</div>
                    <div className='state-number'>2</div>
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
                                <td>4</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        );
    }
}