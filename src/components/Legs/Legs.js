import React from "react";

export const Legs = ({ leg }) => {
  const segments = leg.segments.length - 1;
  function formatDate(inputDate) {
    const months = [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];

    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const formattedDate = `${day} ${month}. ${dayOfWeek}`;

    return formattedDate;
  }

  function сonvertDate(originalDate) {
    const date = new Date(originalDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
  }

  function convertToHours(number) {
    const hours = Math.floor(number / 60);

    return `${hours} ч`;
  }

  function transfers(num) {
    if (num === 0) {
      return "Без пересадок";
    } else if (num > 0) {
      return `${num} пересадок`;
    }
  }

  return (
    <div className="card-info">
      <div className="card-airports">
        <p className="card-airportsDeparture">
          {leg.segments[0].departureCity?.caption},&nbsp;
          {leg.segments[0].departureAirport.caption}
          <button className="airportsDeparture-button">
            ({leg.segments[0].departureAirport.uid})
          </button>
        </p>
        <p className="card-airportsArrival">
          {leg.segments[segments].arrivalCity?.caption},&nbsp;
          {leg.segments[segments].arrivalAirport.caption}&nbsp;
          <button className="airportsDeparture-button">
            ({leg.segments[segments].arrivalAirport.uid})
          </button>
        </p>
      </div>
      <div className="card-time">
        <p className="card-timeDeparture">
          {сonvertDate(leg.segments[0].departureDate)}
          <button className="card-date card-date_left">
            {formatDate(leg.segments[0].departureDate)}
          </button>
        </p>
        <span className="card-timeTotal">{convertToHours(leg.duration)}</span>
        <p className="card-timeArrival">
          <button className="card-date card-date_right">
            {formatDate(leg.segments[segments].arrivalDate)}
          </button>
          {сonvertDate(leg.segments[segments].arrivalDate)}
        </p>
      </div>
      <div className="card-transfers">{transfers(segments)}</div>
      <div className="card-company">
        Рейс выполняет: {leg.segments[0].airline.caption}
      </div>
    </div>
  );
};
