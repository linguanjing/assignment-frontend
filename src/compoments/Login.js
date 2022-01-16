import { useState } from "react";

const Login = () => {

    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = (e) =>{
        e.preventDefault();

        if (!loginId){
            alert('please enter LoginId');
            return ;
        }

        if (!password){
            alert('please enter Password');
            return ;
        }

        doLogin({loginId, password});

        setLoginId('');
        setPassword('');
    }

    const doLogin = (client) =>{
        console.log(client);
    }

    return (
        <div className="container">
            
            <form onSubmit={onSubmit}>
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

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        
        </div>
    )
}

export default Login;


