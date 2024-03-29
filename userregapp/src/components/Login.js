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
        <div className="login">
            <form action="POST">
             <fieldset id="login_sty">
                <legend>Login</legend>
                <table>
                <tr>
                    <td colSpan={2}><input type="email" name="" id="" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter the email" />
               </td>
                </tr>
                <tr>
                    <td colSpan={2}><input type="password" name="" id="" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter the password" />
               </td>
                </tr>
                <tr>
                    <td colSpan={2} align="center"><button onClick={submit}>SIGN IN</button></td>
                </tr>
                <tr>
                    <td><input type="radio"/>Remember Me</td>
                    <td><p>Forget Password?</p></td>
                </tr>
                <tr>
                    <td>Don't have an account?</td>
                    <td><Link to="/signup">SignUp</Link></td>
                </tr>
                </table>
             </fieldset>
            </form>
        </div>
    )
}

export default Login;