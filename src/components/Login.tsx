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
    <div className="w-[300px] flex flex-col justify-center items-center m-auto h-[100vh] ">
        <h1 className=" text-[40px] font-bold">Login Page</h1>
        <form onSubmit={handleLoginFromSubmit} className=" flex flex-col justify-center items-center ">
        <input type="Email" placeholder="Email" onChange={handleLoginEmail} className=" bg-gray-500 rounded-lg  p-2 mb-5" />
        <input type="password" placeholder="Password" onChange={handleLoginPassword} className=" bg-gray-500 rounded-lg  p-2 mb-5"  />
        <button type="submit"  className=" bg-green-700 w-[150px] rounded-lg  p-2" >Login</button>
        </form>
    </div>
  )
}

export default Login