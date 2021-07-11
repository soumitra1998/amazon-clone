import React,{useState} from 'react';
import "./Login.css";
import {Link,useHistory} from 'react-router-dom'
import { auth } from './firebase';

const Login = () => {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn=event=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                //
                history.push("/");
            })
            .catch(e=>alert(e.message))
    }
    const register=event=>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //user create
            history.push("/");
        })
        .catch(e=>alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://firebasestorage.googleapis.com/v0/b/clone-ad05d.appspot.com/o/1024px-Amazon_logo.svg.png?alt=media&token=bd67b429-a15d-4c06-b51b-dfa17f34d093" alt="" />

            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={event=>setEmail(event.target.value)} />
                    <h5>password</h5>
                    <input type="password" value={password} onChange={event=>setPassword(event.target.value)} />
                    <button type="submit" onClick={signIn} className="login__singinButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
            
            
        </div>
    )
}

export default Login
