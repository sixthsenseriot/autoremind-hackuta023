import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function MyCarsCards() {
  return (
    <div className="cards">
      <h1>My cars</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/subaru-forester.jpg"
              text="Explore the outdoors in style with the 2024 Subaru Forester. It's built for family adventures with standard AWD, advanced safety, and a spacious interior."
              label="Subaru Forester"
            //   path="/services"
            />
            <CardItem
              src="images/vehicle.avif"
              text="Experience the 2024 Ford Bronco® SUV legacy with 9 available trims. Choose between 2-doors or 4-doors & soft or hardtop options, 3 available engines & a ton of exterior colors. Enjoy impressive off-roading capabilities."
              label="Ford Bronco"
              //path="/services"
            />
            <CardItem
              src="images/brake-change.png"
              text="A brake service is a critical automotive maintenance procedure aimed at ensuring the safety and optimal performance of a vehicle's braking system. Brakes play a vital role in a vehicle's ability to slow down and stop effectively, making their maintenance and replacement a matter of utmost importance."
              label="Brake Change"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyCarsCards;
