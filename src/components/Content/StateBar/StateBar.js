import React from 'react';
import {Card} from './Card/Card'

export class StateBar extends React.Component {
    render() {
        return (
            <div className='state-bar'>
                <Card name='icon-coffee'>
                    <div>Building</div>
                    <div>3</div>
                </Card>
                <Card name='icon-cog'>
                    <div>Idle</div>
                    <div>2</div>
                </Card>
                <Card>
                    <table>
                        <tr>
                            <th>ALL</th>
                            <th>PHYSICAL</th>
                            <th>VIRTUAL</th>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>4</td>
                            <td>4</td>
                        </tr>
                    </table>
                </Card>
            </div>
        );
    }
}