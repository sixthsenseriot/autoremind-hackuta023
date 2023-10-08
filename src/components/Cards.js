import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/oil-change.png"
              text="An oil change is a routine maintenance procedure performed on a motor vehicle's engine to ensure its smooth and efficient operation. This essential service involves replacing the old engine oil with fresh, clean oil, along with replacing the oil filter"
              label="Oil Change"
              path="/services"
            />
            <CardItem
              src="images/tire-change.png"
              text="A tire change is a common automotive maintenance procedure that involves the removal and replacement of one or more tires on a vehicle. This service is typically performed for various reasons, such as wear and tear, damage, or to adapt to different driving conditions. "
              label="Tire Change"
              path="/services"
            />
            <CardItem
              src="images/brake-change.png"
              text="A brake change, also known as a brake replacement or brake service, is a critical automotive maintenance procedure aimed at ensuring the safety and optimal performance of a vehicle's braking system. Brakes play a vital role in a vehicle's ability to slow down and stop effectively, making their maintenance and replacement a matter of utmost importance."
              label="Brake Change"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
