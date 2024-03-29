import React,{useEffect, useState} from "react"
import axios from "axios"
import { useNavigate,Link} from "react-router-dom"
import '../App.css'

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("user already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
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
                <legend id="leg">Sign Up</legend>
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
                    <td colSpan={2} align="center"><button onClick={submit}>Register</button></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center">Keep me Logged in<Link to="/" id="signUp">LOGIN</Link></td>
                </tr>
                </table>
             </fieldset>
            </form>
        </div>
    )
}

export default Login;