import React from 'react';

export class Modal extends React.PureComponent {
    state = {
        disabled: true,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.show) {
            const modal = document.getElementsByClassName('modal')[0];
            modal.style.left = this.props.x + 'px';
            modal.style.top = this.props.y + 'px';
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.closeWhenClickOtherArea);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeWhenClickOtherArea);
    }

    changeResources = this.props.serviceOperations.changeResources;
    getResources = this.props.serviceOperations.getResources;
    modifyServicesData = this.props.serviceOperations.modifyServicesData;

    handleInputOnChange = (e) => {
        const resources = this.parseInput(e.target.value);
        const oldResources = this.getResources(this.props.idOnHandle);
        let disabled = false;
        for (let resource of resources) {
            if (oldResources.includes(resource)) {
                disabled = true;
            }
        }
        if (e.target.value === "") {
            disabled = true;
        }
        this.setState({disabled});
    }

    handleAddResources = async () => {
        const {idOnHandle} = this.props;
        const input = document.getElementsByClassName('modal-input')[0].value;
        const resources = this.parseInput(input);
        const oldResources = this.getResources(idOnHandle);
        const newResources = [...oldResources, ...resources];
        this.changeResources(idOnHandle, newResources);
        await this.modifyServicesData(idOnHandle, newResources);
        this.props.handleCloseModal();
    }

    parseInput = (input) => {
        return input.split(',');
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
                            onChange={this.handleInputOnChange}
                        />
                    </div>
                    <div className='modal-footer'>
                        <button
                            className='add'
                            onClick={this.handleAddResources}
                            disabled={this.state.disabled}
                        >
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