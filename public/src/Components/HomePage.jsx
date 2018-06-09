import React from "react";
import { NavBar } from "./NavBar.jsx";
import { Footer } from "./Footer.jsx";


export class HomePage extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
        
        <Footer />
      </div>
    )
  }
}
