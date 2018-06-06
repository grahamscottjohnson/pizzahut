import React from "react";

export class MenuLink extends React.Component{
  render(){
    return(
      <div className = "dropDown-item">
        <a className = "dropDown-anchor" href = {this.props.link} >{this.props.content}</a>
      </div>
    )
  }
}