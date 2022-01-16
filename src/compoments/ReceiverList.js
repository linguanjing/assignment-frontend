
import React, { Component } from 'react'

import ClientService from '../services/ClientService';

export default class ReceiverList extends Component {
    

    state = {
        isLoading: true,
        receiverList: []
      };

      async componentDidMount() {
        
        const {receiverList, isLoading} = this.state;
    
        ClientService.getReceiverList ('sky').then ((res) => {
            this.setState({receiverList : res.data});
            this.setState({isLoading : false});
        });
    
      }

    render() {
        const {receiverList, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (   

            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul className="dropdown-menu">
                    {receiverList.map(receiver =>
                        <li key={receiver.loginId}><a className="dropdown-item" href="#" > {receiver.displayName}</a></li>
                    )}
                </ul>
                <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
            </div>
        )
    }
}
