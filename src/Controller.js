
import React, { useState } from "react"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import AdminPortal from "./components/portal/adminPortal/AdminPortal";
import DevoloperPortal from "./components/portal/devoloperPortal/DevoloperPortal";
import ManagerPortal from "./components/portal/managerPortal/ManagerPortal";


const Controller=()=>{
    const [devolperData,setDevoloperData]=useState ([{
        id:0,
        user:"monojitwithu",
        projectStatus:0,
        assignedProject:"Login Form"



    },{
        id:1,
        user:"avishek576",
        projectStatus:0,
        assignedProject:""



    },{
        id:2,
        user:"sawan908",
        projectStatus:0,
        assignedProject:""



    },{
        id:3,
        user:"priyanka332",
        projectStatus:0,
        assignedProject:""



    },{
        id:4,
        user:"wolf765",
        projectStatus:0,
        assignedProject:""



    },{
        id:5,
        user:"hello908",
        projectStatus:0,
        assignedProject:""



    },{
        id:6,
        user:"punit250",
        projectStatus:0,
        assignedProject:""



    }])
     

    const setProjectClickHandler=(Id)=>{
       

         const user=devolperData.find((user)=>user.user===Id)
        const positionOfTheUser=user.id
        
        
          

        const pojectStatus=devolperData[positionOfTheUser].projectStatus
        
        if(pojectStatus===0){
            const nob=[...devolperData,devolperData[positionOfTheUser].projectStatus=1]
            setDevoloperData( nob)

        }else{
            const nob=[...devolperData,devolperData[positionOfTheUser].projectStatus=0]
            setDevoloperData( nob)
        }
        
    }

    const endProjectClickHandler=(userId)=>{
        const user=devolperData.find((user)=>user.user===userId)
        const positionOfTheUser=user.id

        const nob=[...devolperData,devolperData[positionOfTheUser].projectStatus=3]
        setDevoloperData(nob)



    }
    return(
        <>
        <Router>

            <Switch>
                <Route exact  path="/" render={()=><LoginPage/>}/>
                <Route exact path="/admin" render={()=><AdminPortal/>}/>
                <Route exact path="/devoloper/:userId" render={()=><DevoloperPortal devolperData={devolperData} setProjectClickHandler={setProjectClickHandler} endProjectClickHandler={endProjectClickHandler}/>}/>
                <Route exact path="/manager" render={()=><ManagerPortal/>}/>
            </Switch>
        </Router>


        </>
    )
}
export default Controller;