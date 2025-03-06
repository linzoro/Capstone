import React, {useState} from 'react'
import './Login.css'
import logo from '../../assets/ch.png'
import { login, signup } from '../../firebase'
//import {user_author} from '../../firebase'



const Login = () => {


    const [signState, setSignState]= useState("Sign In");
    const [name, setname]=useState("");
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");

    const user_author= async(event)=>{
        event.preventDefault();
        if(signState==="Sign In "){
            await login(email, password);
        }else {
            await signup(name, email, password);
        }
    }

    
    return (
        <div className='login'>
            <img src={logo} className='login-logo' alt="" />
            <div className="login-form">
                <h1> {signState} </h1>
                <form>
                    {signState==="Sign Up"?
                    <input value={name} onChange={(e)=>{setname(e.target.value)}} 
                    type="text" placeholder='Your name' />:<></>}
                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} 
                    type="email" placeholder='email' />
                    <input value={password} onChange={(e)=>{setpassword(e.target.value)}} 
                    type="password" placeholder='password' />
                    
                    <button onClick={user_author} type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p> Need Help?</p>
                    </div>
                    </form>
                    <div className="form-switch">
                        {signState==="Sign In"?
            <p>New to Crimehouse? <span onClick={()=>{setSignState("Sign Up")}}> Sign Up Now</span></p>:
            <p>Already have an account? <span onClick={()=> {setSignState("Sign In")}}>Sign In Now</span></p>}
                </div>
            
            </div>
        </div>
    )
}

export default Login