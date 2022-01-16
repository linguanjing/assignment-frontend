import React, { Component } from 'react'
import ClientService from '../services/ClientService';

export default class SignupForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            loginId: '',
            password:'',
            displayName:''
        }
        
    }
    
    setLoginId(value){
        this.setState({loginId: value});
    }

    setPassword(value){
        this.setState({password: value});
    }

    setDisplayName(value){
        this.setState({displayName: value});
    }

    createClient = (e) => {
        e.preventDefault();

        if (! this.state.loginId){
            alert('please enter LoginId');
            return ;
        }


        if (! this.state.password){
            alert('please enter Password');
            return ;
        }

        if (! this.state.displayName){
            alert('please enter Display Name');
            return ;
        }

        let client = {loginId: this.state.loginId, password : this.state.password, displayName : this.state.displayName};

        this.setState({loginId: ''});
        this.setState({password: ''});
        this.setState({displayName: ''});

        // console.log('client => ' + JSON.stringify(client));

        ClientService.createClientAccount(client).then(res => {
            console.log('res => ' + res);
            // todo check error 
            this.props.history.push("/dashboard/" + client.loginId);      
        });

        
    }

    cancel = (e) => {
        e.preventDefault();
        //back to login page
        this.props.history.push("/");
    }


    render() {
        return (
            <div className="container">
           
             <div className='card col-md-6 offset-md-3 offset-md-3'>                 
                <h3 className='text-center'>New Client</h3>

                <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <label htmlFor='client.loginId' className="form-label" >Login Id</label>
                            <input type='text' 
                                className="form-control"
                                name='client.loginId' 
                                id='client.loginId' 
                                placeholder='Login ID' 
                                value={this.state.loginId} 
                                onChange ={(e) => this.setLoginId(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='client.password'>Password</label>
                            <input type='password' 
                                    className="form-control"
                                    name='client.password' 
                                    id='client.password' 
                                    placeholder='Password' 
                                    value={this.state.password} 
                                    onChange ={(e) => this.setPassword(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='client.displayName'>Display Name</label>
                            <input type='text' 
                                    className="form-control"
                                    name='client.displayName' 
                                    id='client.displayName' 
                                    placeholder='displayName' 
                                    value={this.state.displayName} 
                                    onChange ={(e) => this.setDisplayName(e.target.value)}/>
                        </div>
                        <button className="btn btn-success" onClick= {this.createClient.bind(this)}>Create Account</button>
                        <button className="btn btn-danger" onClick= {this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </form>
                </div>
             </div>   
               

            
            {/* <form >
                <div className='mb-3'>
                    <label htmlFor='client.loginId' className="form-label" >Login Id</label>
                    <input type='text' 
                        className="form-control"
                        name='client.loginId' 
                        id='client.loginId' 
                        placeholder='Login ID' 
                        value={loginId} onChange ={(e) => setLoginId(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='client.password'>Password</label>
                    <input type='password' 
                            className="form-control"
                            name='client.password' 
                            id='client.password' 
                            placeholder='Password' 
                            value={password} 
                            onChange ={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary" onclick= {this.createClient}>Create Account</button>
            </form> */}
        
        </div>
        )
    }
}
