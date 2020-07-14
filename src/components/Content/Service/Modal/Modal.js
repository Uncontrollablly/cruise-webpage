import React from 'react';

export class Modal extends React.PureComponent {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.show) {
            const modal = document.getElementsByClassName('modal')[0];
            // console.log(this.props.x, this.props.y);
            // const top = this.props.y + window.scrollY;
            modal.style.left = this.props.x + 'px';
            modal.style.top = this.props.y + 'px';
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.closeWhenClickOtherArea)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeWhenClickOtherArea)
    }

    closeWhenClickOtherArea = (e) => {
        const target = e.target;
        if (target.className !== 'icon-plus' && !target.closest('.modal')) {
            this.props.handleCloseModal();
        }
    }

    render() {
        return this.props.show && (
            <div className='modal'>
                    <div className='modal-content'>
                        <button className='icon-close' onClick={this.props.handleCloseModal}/>
                        <p>Separate multiple resource name with commas</p>
                        <input
                            className='modal-input'
                            type="text"
                            placeholder="Input value"
                            onChange={this.props.handleInputOnChange}
                        />
                    </div>
                    <div className='modal-footer'>
                        <button className='add' onClick={this.props.handleAddResources}>
                            Add Resources
                        </button>
                        <button className='cancel' onClick={this.props.handleCloseModal}>
                            Cancel
                        </button>
                    </div>
            </div>
        );
    }
}