import React, { useState } from "react";
import ClientService from "./ClientService";


function LoginService(props){
    const loginId = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin = () => {
        props.history.push('/dashboard');
    }



}

export default LoginService;


// class LoginComponent extends React.Component{

//     constructor(){
//         this.state = {
//             clients:[]
//         }
//     }

//     componentDidMount(){
//         ClientService.gegetReceiverListt().then((response) =>{
//             this.setState({clients : response.data});
//         });
//     }

//     render(){
//         return (
//             <div>
//                 <h1 className="text-center">Client List</h1>
//                 {
//                     this.state.users.map(
//                         client =>{
//                             <p>{client.loginId}</p>
//                          }
//                     );
//                 }
//             </div>
//         )
//     }
// }

// export default LoginComponent;