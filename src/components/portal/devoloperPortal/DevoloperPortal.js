import React, { useEffect, useState } from "react";
import { Switch, useParams } from "react-router-dom";

const DevoloperPortal = ({
  devolperData,
  endProjectClickHandler,
  setProjectClickHandler,
}) => {
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [projectSatuss, setProjectStatuss] = useState("");
  const [project, setProject] = useState("");
  useEffect(() => {
    getUserData();
  });

  const getUserData = () => {
    const user = devolperData.find((user) => user.user === userId);
    const positionOfTheUser = user.id;
    const pojectStatus = devolperData[positionOfTheUser].projectStatus;

    switch (pojectStatus) {
      case 0:
        setProjectStatuss("Not Started");
        break;

      case 1:
        setProjectStatuss(" Started");
        break;
      case 3:
        setProjectStatuss(" Ended");
        break;

      default:
        return projectSatuss;
    }
    setName(user.user);
    setProject(user.assignedProject);
  };

  return (
    <div className="dev-container">
      <div className="devoloper-card">
        <h1>Welcome to Devoloper Portal</h1>
        <h1>Welcome Back {name}</h1>
        <h1>Project : {project}</h1>
        <h2>
          {" "}
          Project Status : <h3>{projectSatuss}</h3>
        </h2>
        <button onClick={() => setProjectClickHandler(userId)}>
          Start Project
        </button>
        <button onClick={() => endProjectClickHandler(userId)}>
          End Project
        </button>
      </div>
    </div>
  );
};

export default DevoloperPortal;
