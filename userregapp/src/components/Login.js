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
                    history("/home")
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
        <div className="login">
            <form action="POST">
             <fieldset id="login_sty">
                <legend id="leg">Login</legend>
                <table>
                <tr>
                    <td colSpan={2} align="center"><input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter the email" />
               </td>
                </tr>
                <tr>
                    <td colSpan={2} align="center"><input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter the password" />
               </td>
                </tr>
                <tr>
                    <td><input type="checkbox"/>Remember Me</td>
                    <td colSpan={1} id="for">Forget Password?</td>
                </tr>
                <tr>
                    <td colSpan={2} align="center"><button onClick={submit}>SIGN IN</button></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center">Don't have an account?<Link to="/signup" id="signUp">SIGN UP</Link></td>
                </tr>
                </table>
             </fieldset>
            </form>
        </div>
    )
}

export default Login;