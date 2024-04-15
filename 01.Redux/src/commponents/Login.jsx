import React,{useState,useContext} from "react";
import userContext from "../context/UserContext";
const Login = ()=>{
    const [username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handlerSubmit = (e)=>{
        e.preventDefault()
        setUser({Password,username})
    }
    return(
        <div>
            <h2>Login</h2>
            <input value={username}
            onChange={(e)=> setUsername(e.target.value)} 
            type="text" 
            placeholder="username"/>
            <input
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password" placeholder="password"/>
            <button onClick={handlerSubmit}>submit</button>
            
        </div>
    )
}
export default Login;