import React, { useState } from "react"
import { useHistory } from "react-router-dom"

 
const Admin=({heading,user})=>{
    const devolperData=[{
        id:"monojitwithu",
        password:"12345678",
        },
        {
            id:"punit250",
            password:"12345678",
            },
            {
                id:"hello908",
                password:"wolf765",
                },{
                    id:"priyanka332",
                    password:"12345678",
                    },{
                        id:"sawan908",
                        password:"12345678",
                        },{
                            id:"monojitwithu",
                            password:"12345678",
                            },

    ]
    const adminData={id:"admin",password:"admin"}
    const managerData={id:"manager",password:"manager"}

    const history=useHistory();
    

    const[inputData,setInputData]=useState({id:"",password:""}) //setting the input data getting from the form for

    
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

        
        

            
            if(user==="ADMIN"){
                if(adminData.id===inputData.id&& adminData.password===inputData.password){
                    window.alert("success")
                    history.push("/admin")
                    
                }else{
                    window.alert("Try Again")
                }
                

                
            }else if(user==="DEVOLOPER"){

                devolperData.forEach((item)=>{
                    if(item.id===inputData.id&& item.password===inputData.password){
                        window.alert("success")
                        history.push(`/devoloper/${inputData.id}`)
                        
                    }

                })
                
                
            }else if(user==="MANAGER"){
                if(managerData.id===inputData.id&& managerData.password===inputData.password){
                    window.alert("success")
                    history.push("/manager")
                    
                }else{
                    window.alert("Try Again")
                }
            }
            setInputData({...inputData,id:"",password:""})
        
        




        
    }
    
   

    return(
        <div className="login-form">
            <h2>{heading}</h2>
            <input type="text" placeholder="Enter User Name" onChange={inputHandler} name="userName" value={inputData.id}/>
            <input type="password" placeholder="Enter User Password" name="password" onChange={inputHandler} value={inputData.password}/>
            <button onClick={validate}>Login</button>



        </div>
    )
    }

export default Admin;