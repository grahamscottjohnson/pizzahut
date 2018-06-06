import React from "react";
import { MenuLink } from "./MenuLink.jsx";

export class MenuDropdown extends React.Component{
  render(){
    return(
      <div className = "navBar-dropDown">
        <a className = "navBar-item" href = /*TODO*/"#">Menu V</a>
        <div className = "dropDown-menu">
          <MenuLink link = "#" content = "Menu"/>
          <MenuLink link = "#" content = "Deals"/>
          <MenuLink link = "#" content = "Pizza"/>
          <MenuLink link = "#" content = "Something"/>
        </div>
      </div>
    )
  }
}
