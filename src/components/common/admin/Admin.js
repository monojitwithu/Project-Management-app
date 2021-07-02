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

    const history=useHistory();
    

    const[inputData,setInputData]=useState({id:"",password:""}) //setting the input data getting from the form for

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

        
        

            
            if(user==="ADMIN"){
                history.push("/admin")
            }else if(user==="DEVOLOPER"){

                devolperData.forEach((item)=>{
                    if(item.id===inputData.id&& item.password===inputData.password){
                        window.alert("success")
                        history.push(`/devoloper/${inputData.id}`)
                        
                    }

                })
                
                
            }else if(user==="MANAGER"){
                history.push("/manager")
            }
            setInputData({...inputData,id:"",password:""})
        
        




        
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