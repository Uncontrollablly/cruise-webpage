import React from 'react';
import {StateBar} from './StateBar/StateBar';
import {Navigation} from './Navigation/Navigation';
import {Service} from './Service/Service';

export class Content extends React.Component {
    state = {
        services: [],
        status: {
            building: 0,
            idle: 0,
        },
        types: {
            virtual: 0,
            physical: 0,
        }
    }

    async componentDidMount() {
        await this.fetchServicesData();
        this.computeStatusNumber();
        this.computeTypesNumber();
    }

    computeStatusNumber = () => {
        const reducer = status => (number, cur) => {
            if (cur.status === status) {
                number += 1;
            }
            return number;
        }
        const buildingStatusNumber = this.state.services.reduce(reducer("building"), 0);
        const idleStatusNumber = this.state.services.reduce(reducer("idle"), 0);
        this.setState({
            status: {
                building: buildingStatusNumber,
                idle: idleStatusNumber,
            }
        });
    }

    computeTypesNumber = () => {
        const reducer = type => (number, cur) => {
            if (cur.type === type) {
                number += 1;
            }
            return number;
        }
        const virtualTypeNumber = this.state.services.reduce(reducer("virtual"), 0);
        const physicalTypeNumber = this.state.services.reduce(reducer("physical"), 0);
        this.setState({
            type: {
                virtual: virtualTypeNumber,
                physical: physicalTypeNumber,
            }
        });
    }

    fetchServicesData = async () => {
        const response = await fetch("http://localhost:3001/agents/");
        if (response.ok) {
            const services = await response.json();
            this.setState({services});
        } else {
            console.log("Error: " + response.status);
        }
    }

    modifyServicesData = async (id, data) => {
        const url = `http://localhost:3001/agents/${id}`;
        await fetch(url,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({resources: data})
        });
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

    getResources = (id) => {
        const service = this.state.services.find(service =>
            service.id === id);
        return service.resources;
    }

    serviceOperations = {
        getResourcesAfterDeleted: this.getResourcesAfterDeleted,
        changeResources: this.changeResources,
        getResources: this.getResources,
        modifyServicesData: this.modifyServicesData,
    }

    render() {
        return (
          <main className="main-content">
              <div className="content-wrapper">
                  <StateBar
                      status={this.state.status}
                      types={this.state.types}
                  />
                  <Navigation />
                  <Service
                      services={this.state.services}
                      serviceOperations={this.serviceOperations}
                  />
              </div>
          </main>
        );
    }
}