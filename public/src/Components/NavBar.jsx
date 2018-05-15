import React from "react";
import { MenuDropdown } from "./MenuDropdown.jsx";
import { Welcome } from "./Welcome.jsx";
import { HutRewards } from "./HutRewards.jsx";

export class NavBar extends React.Component{
  render(){
    return(
      <div>
        <div className = "topBanner fullscreen">
          <MenuDropdown />
          <div className = "navBar item">
            <a href = /*TODO*/"">Deals</a>
          </div>
          <img className = "navBar logo"
            alt = "Pizza Hut"
            src = "../../images/pizzahut"
          />
        </div>
        <div className = "bottomBanner fullscreen">
          <Welcome />
          <HutRewards />
        </div>
        <div className = "navBar divider"></div>
      </div>
    )
  }
}
