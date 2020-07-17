import React from 'react';
import {Card} from '../Card/Card'

export class StateBar extends React.Component {
    render() {
        return (
            <div className='state-bar'>
                <Card className='building'>
                    <div className='state icon-cog'>Building</div>
                    <div className='number'>{this.props.status.building}</div>
                </Card>
                <Card className='idle'>
                    <div className='state icon-coffee'>Idle</div>
                    <div className='number'>{this.props.status.idle}</div>
                </Card>
                <Card className='types'>
                    <table className='types-table'>
                        <tbody>
                            <tr className='types-name'>
                                <td>ALL</td>
                                <td>PHYSICAL</td>
                                <td>VIRTUAL</td>
                            </tr>
                            <tr className='types-number'>
                                <td>{this.props.types.physical+this.props.types.virtual}</td>
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