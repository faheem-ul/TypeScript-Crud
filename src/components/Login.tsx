import React, {  useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


function Login() {
    const navigate =  useNavigate()
const [LoginEmail, setLoginEmail] = useState("")
const [LoginPassword, setLoginPassword] = useState("")

function formValidate(){
    if (LoginEmail === "" || LoginPassword === ""){
        toast.error("Please fill all the required fields")
     
        
    }
    else{
        navigate("/dashboard")
    }
}

    function handleLoginFromSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()  
       formValidate()
    }

    function handleLoginEmail(e:React.ChangeEvent<HTMLInputElement>){
        setLoginEmail(e.target.value)
        // console.log(LoginEmail);
    }

    function handleLoginPassword (e: React.ChangeEvent<HTMLInputElement>): void {
        setLoginPassword(e.target.value)
        // console.log(LoginPassword);
    }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLoginFromSubmit}>
        <input type="Email" placeholder="Email" onChange={handleLoginEmail} />
        <input type="password" placeholder="Password" onChange={handleLoginPassword} />
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login