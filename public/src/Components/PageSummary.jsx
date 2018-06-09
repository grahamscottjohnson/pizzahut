import React from 'react';

export class PageSummary extends React.Component{
    render(){
        return(
            <div className = 'pageSummary'>
                <h3>{this.props.title}</h3>
                <ul>
                    {this.props.links.map( makeIntoLi )}
                </ul>
            </div>
        )
    }
}

function makeIntoLi( inObj ){
    // expect inObj to be {
    //     name: ___;
    //     link: ___;
    // }
    return (
        <li>
            <a className = 'footer-link' alt = '#' href = {inObj.link} >{inObj.name}</a>
        </li>
    )
}