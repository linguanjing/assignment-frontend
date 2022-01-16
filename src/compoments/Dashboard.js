import React, { Component } from 'react'
import ClientService from '../services/ClientService';
import TransactionService from '../services/TransactionService';
import ReceiverList from './ReceiverList'
import TransferForm from './TransferForm';
import TransferMessage from './TransferMessage';

export default class Dashboard extends Component {

  constructor(props){
      super(props);

      this.state = {
          isLoading: true,
          loginId: this.props.match.params.loginId,
          transactionMessageList: [],
          receiverList: []
      }   
      
      this.onReceiverSelecte = this.onReceiverSelecte.bind(this);
      
  }

  async componentDidMount() {
        
    const {isLoading, loginId, transactionMessageList, receiverList} = this.state;

    TransactionService.getTransactionMessageList (loginId).then ((res) => {
        this.setState({transactionMessageList : res.data});
    });

    ClientService.getReceiverList (loginId).then ((res) => {
      this.setState({receiverList : res.data});
      this.setState({isLoading : false});
    });

  }

  onReceiverSelecte (){
    alert("onReceiverSelecte");
  }


  render() {

    const {transactionMessageList, isLoading} = this.state;

    if (isLoading) {
        return <p>Loading Transaction Messages...</p>;
    }

    return (

      <div className="container">
           
            <div className='card col-md-6 offset-md-3 offset-md-3'>                 
              <h3 className='text-center'>Hello Client!</h3>

              <div className="card-body">
                <TransferForm receiverList={this.state.receiverList} loginUserId={this.state.loginId}/>
                <br />

                <TransferMessage transactionMessageList={this.state.transactionMessageList}/>

                <br />
                
              </div>
          </div>
    </div>
    )
  }
}