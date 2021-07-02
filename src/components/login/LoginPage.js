import React, { useState } from "react"
import Admin from "../common/admin/Admin"
import Devoloper from "../common/devoloper/Devoloper"
import Manager from "../common/manager/Manager"


const Login=()=>{

    const [user,setUser]=useState({
        
    })

    const clickHandler=(e)=>{
        
        const userr=e.target.name

        setUser(userr)
        
        // if(userr==="ADMIN"){
        //     setUser(userr)
        // }
        // if(userr==="MANAGER"){
        //     setUser(userr)
        // }
        // if(userr==="DEVOLOPER"){
        //     setUser(userr)
        // }


        
         

         

    }
    
    
    return(
        <div>
            this is Login Page

            <div className="admin">
                <label>Login As Admin</label>
                <button onClick={clickHandler} name="ADMIN">Login</button>

            </div>
            <div className="Manager">
                <label>Login As Manager</label>
                <button onClick={clickHandler}  name="MANAGER">Login</button>

            </div>

            <div className="Devoloper">
                <label>Login As Devoloper</label>
                <button onClick={clickHandler} name="DEVOLOPER">Login</button>

            </div>

            {user==="ADMIN"&&(
                <Admin heading="Admin Login" user={user}/>
            )}
            {user==="DEVOLOPER"&&(
                <Admin heading="Devoloper Login" user={user}/>
            )}
            {user==="MANAGER"&&(
                <Admin heading="Manager Login" user={user}/>
            )}




            
        </div>
    )
}

export default Login;