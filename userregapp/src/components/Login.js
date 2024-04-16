import React,{useEffect, useState} from "react"
import axios from "axios"
import { useNavigate,Link} from "react-router-dom"
import '../App.css'

function Login(){

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch{
            console.log(e);
        }
    }

    return(
        <div className="_contain vh-100 d-flex align-items-center justify-content-center">
        <form action="POST">
        <fieldset className="card px-5">
            <div className="d-flex flex-column">
                <div className="_main">
                    <legend>Login</legend>
                </div>
                <div className="_main">
                    <input type="email" className="form-control " onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter the email" />
                </div>
                <div className="_main">
                    <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter the password" />
                </div>
                <div className="_main d-flex justify-content-between">
                    <span><input type="checkbox"/>Remember Me</span>
                    <span>Forget Password?</span>
                </div>
                <div className="_main text-center">
                    <button onClick={submit}>SIGN IN</button>
                </div>
                <div className="_main d-flex justify-content-between">
                    <span>Don't have an account?</span>
                    <span><Link to="/signup" id="signUp">SIGN UP</Link></span>
                </div>
            </div>
        </fieldset>
       </form>
    </div>
    )
}

export default Login;