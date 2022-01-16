import Header from "./compoments/Header";
import Login from "./compoments/Login";


import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter  } from 'react-router-dom'
import Footer from "./compoments/Footer";
import ReceiverList from "./compoments/ReceiverList";
import Dashboard from "./compoments/Dashboard";
import ErrorPage from "./compoments/ErrorPage";
import SignupForm from "./compoments/SignupForm";


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
        <Router>
          <div className="container">
          
              <Header /> 

              {/* <ReceiverList /> */}

              <Switch >
                <Route exact path="/" component={Login}/>
                <Route exact path="/signup" component={SignupForm}/>
                <Route exact path="/error" component={ErrorPage}/>
                <Route exact path="/dashboard/:loginId" component={Dashboard}/>
              </Switch >

              {/* <Login parentCallback = {this.handleCallback}/> */}

              {/* <ReceiverList /> */}

              <Footer/>
           </div>
         </Router>
      </div>
    );
  }
  
}

export default App;