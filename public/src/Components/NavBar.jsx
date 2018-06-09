import React from "react";
import { MenuDropdown } from "./MenuDropdown.jsx";
import { Welcome } from "./Welcome.jsx";
import { HutRewards } from "./HutRewards.jsx";

export class NavBar extends React.Component{
  render(){
    return(
      <div>
        <div className = "navBar">
          <div className = "navBar-options">
            <MenuDropdown />
            <a className = "navBar-item" href = /*TODO*/"">Deals</a>
          </div>
          <div className = "navBar-logo">
            <img 
              alt = "Pizza Hut"
              src = "../../images/pizzahut.png"
            />
          </div>
          <div className = "navBar-counterBalance"></div>
        </div>
        <div className = "navBar-welcome">
          <Welcome />
          <HutRewards />
        </div>
        <div className = "navBar-divider"></div>
      </div>
    )
  }
}
