import React,{ useState} from "react"
import axios from "axios"
import { useNavigate,Link} from "react-router-dom"
import '../App.css'

function Login() {

    const history=useNavigate();

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{
                name,email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("user already exists")
                }
                else if(res.data=="notexist"){
                    history("/")
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
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center ">
               <form action="POST">
               <fieldset className="card px-5">
                   <div className="d-flex flex-column">
                       <div className="_main">
                           <legend>Sign Up</legend>
                       </div>
                       <div className="_main">
                           <input type="email" className="form-control " onChange={(e) => { setName(e.target.value) }} placeholder="Enter the name" />
                       </div>
                       <div className="_main">
                           <input type="text" className="form-control " onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter the email" />
                       </div>
                       <div className="_main">
                           <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter the password" />
                       </div>
                       <div className="_main d-flex justify-content-between">
                           <span><input type="checkbox"/>Remember Me</span>
                           <span>Forget Password?</span>
                       </div>
                       <div className="_main text-center ">
                           <button className="rounded text-white" onClick={submit}>Register</button>
                       </div>
                       <div className="_main d-flex justify-content-between">
                           <span>Keep me Logged in</span>
                           <span><Link to="/" id="signUp" className="_up rounded">LOGIN</Link></span>
                       </div>
                   </div>
               </fieldset>
              </form>
           </div>
        </div>




        
    )
}

export default Login;