import React from "react";

export class Welcome extends React.Component{
  render(){
    return(
      <div className = "navBar welcome">
        <span id = "welcome">
          Welcome to Pizza Hut!
        </span>
        <span id = "signIn">
          (Sign In)
        </span>
      </div>
    )
  }
}
