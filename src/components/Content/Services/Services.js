import React from 'react';
import {Item} from './Item/Item';
import {Modal} from './Modal/Modal';

export class Services extends React.Component {
    state = {
        services: [],
        show: false,
        id: null,
        modal: {}
    }

    async componentDidMount() {
        await this.fetchServices();
    }

    handleClickAdd = (id) => {
        return (e) => {
            const rectObject = e.target.getBoundingClientRect();
            this.setState({
                id,
                modal: {
                    x: rectObject.left,
                    y: rectObject.bottom
                },
                show: true,
            });
        }
    }

    handleDeleteResource = (id, resource) => {
        return async () => {
            const newResources = this.getResourcesAfterDeleted(id, resource);
            this.changeResources(id, newResources);
            await this.modifyResourcesForService(id, newResources);
        }
    }

    handleInputOnChange = (e) => {
        const resources = this.parseInput(e.target.value);
        const oldResources = this.getResources(this.state.id);
        const addButton = document.getElementsByClassName('add')[0];
        for (let resource of resources) {
            if (oldResources.includes(resource)) {
                addButton.disabled = true;
                return;
            }
        }
        addButton.disabled = false;
    }

    parseInput = (input) => {
        return input.split(',');
    }

    getResources = (id) => {
        const service = this.state.services.find(service =>
            service.id === this.state.id);
        return service.resources;
    }

    handleAddResources = async () => {
        const {id} = this.state;
        const input = document.getElementsByClassName('modal-input')[0].value;
        const resources = this.parseInput(input);
        const oldResources = this.getResources(id);
        const newResources = [...oldResources, ...resources];

        this.changeResources(id, newResources);
        await this.modifyResourcesForService(id, newResources);
        this.handleCloseModal();
    }

    handleCloseModal = () => {
        this.setState({
            show: false,
        })
    }

    fetchServices = async () => {
        const response = await fetch("http://localhost:3001/agents/");
        if (response.ok) {
            const services = await response.json();
            this.setState({ services});
        } else {
            console.log("Error: " + response.status);
        }
    }

    getResourcesAfterDeleted = (id, resource) => {
        const service = this.state.services.find(service => service.id === id);
        const index = service.resources.indexOf(resource);
        service.resources.splice(index, 1);
        return service.resources;
    }

    // 替换指定id的service的resources
    changeResources = (id, resources) => {
        this.setState({
            services: this.state.services.map(service =>
                service.id === id ? {...service, resources: resources} : service
            )
        });
    }

    modifyResourcesForService = async (id, data) => {
        const url = `http://localhost:3001/agents/${id}`;
        await fetch(url,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({resources: data})
        });
    }

    render() {
        return (
            <section>
                {this.state.services?.map(service => (
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
                    handleInputOnChange={this.handleInputOnChange}
                    handleAddResources={this.handleAddResources}
                    handleCloseModal={this.handleCloseModal}
                />
            </section>
        );
    }
}