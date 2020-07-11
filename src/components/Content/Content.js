import React from 'react';
import {StateBar} from './StateBar/StateBar';
import {Navigation} from './Navigation/Navigation';
import {Services} from './Services/Services';

export class Content extends React.Component {

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
        let response = await fetch("http://localhost:3001/agents/");
        if (response.ok) {
            let services = await response.json();
            this.setState({ services });
        } else {
            console.log("Error: " + response.status);
        }
    }

    render() {
        return (
          <main className="main-content">
              <div className="content-wrapper">
                  <StateBar />
                  <Navigation />
                  <Services services={this.state.services}/>
              </div>
          </main>
        );
    }
}