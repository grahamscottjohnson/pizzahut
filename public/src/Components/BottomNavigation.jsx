import React from "react";
import { SocialSummary } from "./SocialSummary.jsx";
import { PageSummary } from "./PageSummary.jsx";

export class BottomNavigation extends React.Component{
  render(){
    return(
      <div className = 'bottom-navigation'>
        <SocialSummary />
        <PageSummary title = "Menu" links = { [
          { 
            name: "Pizza",
            link: ["#"]
          },
          {
            name: "Wings",
            link: ["#"]
          },
          { 
            name: "Sides",
            link: ["#"]
          },
          { 
            name: "Pasta",
            link: ["#"]
          },
          { 
            name: "Desserts",
            link: ["#"]
          },
          { 
            name: "Drinks",
            link: ["#"]
          },
          { 
            name: "Dipping Sauces",
            link: ["#"]
          },
          { 
            name: "Deals",
            link: ["#"]
          }
        ] }/>
        <PageSummary title = "Our Food" links = { [
          { 
            name: "Restaurant Quality",
            link: ["#"]
          },
          {
            name: "Food",
            link: ["#"]
          },
          { 
            name: "Nutrition",
            link: ["#"]
          }
        ] }/>
        <PageSummary title = "About Us" links = { [
          { 
            name: "Our Story",
            link: ["#"]
          },
          {
            name: "Hut Life Blog",
            link: ["#"]
          },
          { 
            name: "Carreers",
            link: ["#"]
          },
          { 
            name: "Catering",
            link: ["#"]
          },
          { 
            name: "International",
            link: ["#"]
          },
          { 
            name: "Become A Franchisee",
            link: ["#"]
          },
          { 
            name: "Corporate Contribution Guidelines",
            link: ["#"]
          },
          { 
            name: "Supplier Code",
            link: ["#"]
          },
          { 
            name: "Supplier Code",
            link: ["#"]
          },
          { 
            name: "Diversity",
            link: ["#"]
          },
          { 
            name: "School Lunch",
            link: ["#"]
          },
          { 
            name: "Book it!",
            link: ["#"]
          }
        ] }/>
        <PageSummary title = "CUSTOMER SERVICE" links = { [
          { 
            name: "Contact Us",
            link: ["#"]
          },
          {
            name: "Find A Pizza Hut",
            link: ["#"]
          },
          { 
            name: "FAQs",
            link: ["#"]
          },
          {
            name: "Gift Cards",
            link: ["#"]
          },
          { 
            name: "Español",
            link: ["#"]
          }
        ] }/>
        <PageSummary title = "MY ACCOUNT" links = { [
          { 
            name: "Create An Account",
            link: ["#"]
          },
          {
            name: "Sign In",
            link: ["#"]
          }
        ] }/>
      </div>
    )
  }
}

