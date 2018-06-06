import React from "react";
import { BottomNavigation } from "./BottomNavigation.jsx";

export class Footer extends React.Component{
  render(){
    return(
      <div className = "footer fullscreen">
        <BottomNavigation />
        <div className = "center">
          <img alt = "Powered by Quick Order" src = "../../images/quickorder.jpg" />
        </div>
        <p>
THE DELIVERY CHARGE IS NOT A DRIVER TIP. Offers Available For A Limited Time. You Must Ask/Click For Certain Offers. Additional Charge For Extra Cheese, Stuffed Crust, Pan, And Extra Toppings May Apply. Product Availability, Combinability Of Discounts And Specials, Prices, Participation, Delivery Areas And Charges, And Minimum Purchase Required For Delivery May Vary. Discounts Are Not Applicable To Tax, Delivery Charge, Or Driver Tip. Availability Of WingStreet® Products And Flavors Varies By Pizza Hut® Location.
        </p>
        <p>
        If You Are Using A Screen Reader And Are Having Problems Using This Website, Please Call 800-948-8488 For Assistance.
        </p>
        <p>
        ® 2018 Pizza Hut, LLC. All Rights Reserved. The Pizza Hut Name, Logos And Related Marks Are Trademarks Of Pizza Hut, LLC.
        </p>
        <p>
        The HERSHEY'S® And SPECIAL DARK® Trademarks And Trade Dress Are Used Under License From The Hershey Company. PEPSI®, PEPSI®-COLA, PEPSI® MAX And The Pepsi® Globe Are Registered Trademarks Of PepsiCo, Inc.
        </p>
        <p>
The App Store, IPad, And IPhone Marks Are Trademarks Of Apple, Inc. Twitter Is A Trademark Of Twitter, Inc. Google And Android Are Trademarks Of Google, Inc. Windows Phone Is A Registered Trademark Of Microsoft, Inc.
        </p>
        <p>
All Other Trademarks Are The Property Of Their Respective Owners.
        </p>
        <p>
        Portions © QuikOrder, Inc. 1997-2018 Patents 5,991,739; 6,801,228; Other Patents Pending Portions © IPDEV, Co. 1986-2018 Used With Permission
        </p>
        <p>
This is a clone of the pizzahut webpage made for practicing web development only. All rights belong to their respective holders.
        </p>
      </div>
    )
  }
}
