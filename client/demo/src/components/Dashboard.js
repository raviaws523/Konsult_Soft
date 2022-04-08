import React from "react";
import AuthService from "../services/auth.service";
import Navigation from "./Navigation";
import Home from "./Home";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const logOut = ()=> {
    AuthService.logout();
  }
  if(currentUser){
    return (
      <div>
      
      <div className="">
        
        <header className="">
          <h3>
            <strong>Hello, Aashi </strong>
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
  
      
        
  
      </div>
      </div>
    );
  }else{
    return (
      <Home/>
    )
  }
  
  
};
export default Profile;