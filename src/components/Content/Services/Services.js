import React from 'react';
import {Item} from './Item/Item';

export class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
        };
    }

    async componentDidMount() {
        await this.getServices();
    }

    getServices = async () => {
        const response = await fetch("http://localhost:3001/agents/");
        if (response.ok) {
            const services = await response.json();
            this.setState({ services });
        } else {
            console.log("Error: " + response.status);
        }
    }

    getNewResources = (id, resource) => {
        const service = this.state.services.find(service => service.id === id);
        const index = service.resources.indexOf(resource);
        service.resources.splice(index, 1);
        return {
            resources: service.resources
        };
    }

    handleDeleteResource = (id, resource) => {
        return async event => {
            event.preventDefault();
            const url = `http://localhost:3001/agents/${id}`;
            const newResources = this.getNewResources(id, resource);
            this.setState({
                services: this.state.services.map(item =>
                    item.id === id ? {...item, resources: newResources.resources} : item
                )
            });
            await fetch(url,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newResources)
            });
        }
    }

    render() {
        return (
            <section>
                {this.state.services?.map(service => (
                    <Item
                        service={service}
                        key={service.id}
                        handleDeleteResource={this.handleDeleteResource}
                    />
                ))}
            </section>
        );
    }

}