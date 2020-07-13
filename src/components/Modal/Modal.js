import React from 'react';

export class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return this.props.show && (
            <div className='modal shadow'>
                <div className='modal-content'>
                    <button className='icon-close' onClick={this.props.handleClickClose}/>
                    <p>Separate multiple resource name with commas</p>
                    <input
                        className='modal-input'
                        type="text"
                        placeholder="Input value"
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <div className='modal-footer'>
                    <button className='add' onClick={this.props.handleAddResources}>
                        Add Resources
                    </button>
                    <button className='cancel' onClick={this.props.handleClickClose}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}