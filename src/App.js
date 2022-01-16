import Header from "./compoments/Header";
import Login from "./compoments/Login";


import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component} from 'react';
import Footer from "./compoments/Footer";
import ReceiverList from "./compoments/ReceiverList";


class App extends Component {

  state = {
    loginClientId:''
  };

  
  async componentDidMount() {


  }
 

  render(){
    // const {receiverList, isLoading, loginClientId} = this.state;

    
    return (
      <div className="App">
        <div className="container">
            <Header /> 

            {/* <ReceiverList /> */}

            <Login />

            {/* <Login parentCallback = {this.handleCallback}/> */}

            <ReceiverList />

            <Footer/>
        </div>
            
      </div>
    );
  }
  
}

export default App;