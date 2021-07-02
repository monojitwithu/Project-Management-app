import React, { useState } from "react"
import { useHistory } from "react-router-dom"

 
const Admin=({heading,user})=>{
    const devolperData=[{
        id:"user1",
        password:12345678,
        projectStatus:0,
        assignedProject:""



    }]

    const history=useHistory();
    

    const[inputData,setInputData]=useState({id:"",password:""})
    const passwords={id:"monojitwithu",password:"12345678"}
    //  if(user==="ADMIN"){
    //   passwords={id:"monojitwithu",password:"12345678"}
    //   else if(user==="MANAGER"){
    //       passwords
    //   }

    const inputHandler=(event)=>{


         
        const data=event.target.name
        const value=event.target.value
        if(data==="userName"){
            setInputData({...inputData ,id:value})
        }
        if(data==="password"){
            setInputData({...inputData,password:value})
        }

        
        
        

    }

    const validate=()=>{
        if(inputData.id==="" || inputData.password===""){
            window.alert("Filed Cannot be empty")
            return
        }

        
        if(inputData.id===passwords.id && inputData.password===passwords.password){

            window.alert(`${user} Login SuccessFul`)
            if(user==="ADMIN"){
                history.push("/admin")
            }else if(user==="DEVOLOPER"){
                history.push(`/devoloper/${inputData.id}`)
            }else if(user==="MANAGER"){
                history.push("/manager")
            }
            setInputData({...inputData,id:"",password:""})
        }else{
            window.alert("Wrong Password")
            setInputData({...inputData,id:"",password:""})
        }
        




        
    }
    
   

    return(
        <div>
            <h2>{heading}</h2>
            <input type="text" placeholder="Enter User Name" onChange={inputHandler} name="userName" value={inputData.id}/>
            <input type="password" placeholder="Enter User Password" name="password" onChange={inputHandler} value={inputData.password}/>
            <button onClick={validate}>Login</button>



        </div>
    )
    }

export default Admin;