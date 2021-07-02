import React, { useEffect, useState } from "react"



const ManagerPortal=({devolperData,endProjectClickHandler,setProjectClickHandler})=>{
const [devdata,setDevData]=useState(devolperData)

   

   

    return(
        <div className="admin-portal">
            
            {
                devdata.map((element,index) => (
                    <div className="devoloper-card">
                  
            <h1> {element.user}</h1>
            <h1>Project : {element.assignedProject}</h1>
            <h2>Project Status:</h2>
            <h3></h3>
            
            <button onClick={()=>setProjectClickHandler(element.user)}>Start Project</button>
            <button onClick={()=>endProjectClickHandler(element.user)}>End Project</button>


            
        </div>
                     
                    
                ))

        
            }
            
            

            
            


            
        </div>
    )
    }

export default ManagerPortal;