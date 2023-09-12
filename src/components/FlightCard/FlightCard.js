import React from "react";
import "./FlightCard.css";
import { Legs } from "../Legs/Legs";

function FlightCard({ flight }) {
  return (
    <div className="flight-card">
      <div className="header-card">
        <p className="title-card">{flight.carrier.caption}</p>
        <div className="price-container">
          <p className="price">{flight.price.total.amount} &#8381;</p>
          <p className="price-info">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <Legs leg={flight.legs[0]} />
      <span className="card-separationLine"></span>
      {flight.legs.length > 1 && <Legs leg={flight.legs[0]} />}
      <button className="card-chooseButton">ВЫБРАТЬ</button>
    </div>
  );
}

export default FlightCard;
