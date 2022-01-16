import React, { Component } from 'react'
import ClientService from '../services/ClientService';

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            loginId: '',
            password:''
        }

        this.goSignUp = this.goSignUp.bind(this);
    }

    goSignUp(e){
        this.props.history.push("/signup");
    }
    
    //login form
    setLoginId(value){
        this.setState({loginId: value});
    }

    setPassword(value){
        this.setState({password: value});
    }

    doLogin = (e) => {
        e.preventDefault();

        if (! this.state.loginId){
            alert('please enter LoginId');
            return ;
        }


        if (! this.state.password){
            alert('please enter Password');
            return ;
        }

        let client = {loginId: this.state.loginId, password : this.state.password, displayName : ''};

        this.setState({loginId: ''});
        this.setState({password: ''});

        // console.log('client => ' + JSON.stringify(client));

        ClientService.doLogin(client).then(res => {
            console.log('res => ' + res);
            // todo check error 
            this.props.history.push("/dashboard/" + client.loginId);   
        });

    }

    
    render() {

        return (

            <div className="container">
           
                    <div className='card col-md-6 offset-md-3 offset-md-3'>                 
                    <h3 className='text-center'>Login Page </h3>

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
                            <button className="btn btn-success" onClick= {this.goSignUp.bind(this)}>Sign Up</button>
                            <button className="btn btn-primary" onClick= {this.doLogin.bind(this)} style={{marginLeft: "10px"}}>Login</button>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}




// import { useState } from "react";

// const Login = () => {

//     const [loginId, setLoginId] = useState('');
//     const [password, setPassword] = useState('');


//     const onSubmit = (e) =>{
//         e.preventDefault();

//         if (!loginId){
//             alert('please enter LoginId');
//             return ;
//         }

//         if (!password){
//             alert('please enter Password');
//             return ;
//         }

//         doLogin({loginId, password});

//         setLoginId('');
//         setPassword('');
//     }

//     const doLogin = (client) =>{
//         console.log(client);
//     }

//     return (
//         <div className="container">
            
//             <form onSubmit={onSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor='client.loginId' className="form-label" >Login Id</label>
//                     <input type='text' 
//                         className="form-control"
//                         name='client.loginId' 
//                         id='client.loginId' 
//                         placeholder='Login ID' 
//                         value={loginId} onChange ={(e) => setLoginId(e.target.value)}/>
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor='client.password'>Password</label>
//                     <input type='password' 
//                             className="form-control"
//                             name='client.password' 
//                             id='client.password' 
//                             placeholder='Password' 
//                             value={password} 
//                             onChange ={(e) => setPassword(e.target.value)}/>
//                 </div>

//                 <button type="submit" className="btn btn-primary">Login</button>
//             </form>
        
//         </div>
//     )
// }

// export default Login;


