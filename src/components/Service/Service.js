import React from 'react';
import {Item} from '../Item/Item';
import {Modal} from '../Modal/Modal';

export class Service extends React.Component {
    state = {
        show: false,
        idOnHandle: null,
        modal: {}
    }

    getResourcesAfterDeleted = this.props.serviceOperations.getResourcesAfterDeleted;
    changeResources = this.props.serviceOperations.changeResources;
    modifyServicesData = this.props.serviceOperations.modifyServicesData;

    handleClickAdd = (id) => {
        return (e) => {
            const [x, y] = this.computeModalPosition(e.target);
            this.setState({
                idOnHandle: id,
                modal: {
                    x,
                    y,
                },
                show: true,
            });
        }
    }

    computeModalPosition = (button) => {
        const modalWidth = 570;
        const halfTriangleWidth = 10;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        const x = button.offsetLeft + buttonWidth/2 - (modalWidth/10 + halfTriangleWidth);
        const y = button.offsetTop + buttonHeight + 2 * halfTriangleWidth;
        return [x, y];
    }

    handleDeleteResource = (id, resource) => {
        return async () => {
            const newResources = this.getResourcesAfterDeleted(id, resource);
            this.changeResources(id, newResources);
            await this.modifyServicesData(id, newResources);
        }
    }

    handleCloseModal = () => {
        this.setState({
            show: false,
        })
    }

    render() {
        return (
            <section className='service'>
                {this.props.services?.map(service => (
                    <Item
                        service={service}
                        key={service.id}
                        handleClickAdd={this.handleClickAdd}
                        handleDeleteResource={this.handleDeleteResource}
                    />
                ))}
                <Modal
                    show={this.state.show}
                    x={this.state.modal.x}
                    y={this.state.modal.y}
                    idOnHandle={this.state.idOnHandle}
                    serviceOperations={this.props.serviceOperations}
                    handleCloseModal={this.handleCloseModal}
                />
            </section>
        );
    }
}