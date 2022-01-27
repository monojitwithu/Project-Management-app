import React, { useState } from "react";
import Admin from "../common/admin/Admin";

const Login = () => {
  const [user, setUser] = useState({});

  const clickHandler = (e) => {
    const userr = e.target.name;

    setUser(userr);

    // if(userr==="ADMIN"){
    //     setUser(userr)
    // }
    // if(userr==="MANAGER"){
    //     setUser(userr)
    // }
    // if(userr==="DEVOLOPER"){
    //     setUser(userr)
    // }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-option">
          <label>Login As Admin</label>
          <button onClick={clickHandler} name="ADMIN">
            Login
          </button>

          <label>Login As Manager</label>
          <button onClick={clickHandler} name="MANAGER">
            Login
          </button>

          <label>Login As Devoloper</label>
          <button onClick={clickHandler} name="DEVOLOPER">
            Login
          </button>
        </div>
      </div>

      {user === "ADMIN" && <Admin heading="Admin Login" user={user} />}
      {user === "DEVOLOPER" && <Admin heading="Devoloper Login" user={user} />}
      {user === "MANAGER" && <Admin heading="Manager Login" user={user} />}
    </>
  );
};

export default Login;
