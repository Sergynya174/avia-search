import { useState, useEffect } from "react";
import FlightCard from "../FlightCard/FlightCard";
import "./FlightCardList.css";
import flights from "../../flights.json";

export const FlightCardList = ({ filterData }) => {
  const [displayedFlights, setDisplayedFlights] = useState(5);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    let filteredFlights = flights.result.flights;

    if (filterData.airlines.length > 0) {
      filteredFlights = filteredFlights.filter((flight) =>
        filterData.airlines.includes(flight.flight.carrier.caption)
      );
    }

    if (filterData.sortBy === "priceAscending") {
      filteredFlights.sort(
        (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
      );
    } else if (filterData.sortBy === "priceDescending") {
      filteredFlights.sort(
        (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
      );
    }

    // Сортировка по времени в пути
    if (filterData.sortBy === "time") {
      filteredFlights.sort(
        (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
      );
    }

    if (filterData.stops.length > 0) {
      filteredFlights = filteredFlights.filter((flight) =>
        filterData.stops.includes(flight.flight.legs[0].segments.length - 1)
      );
    }
    setFilteredFlights(filteredFlights);
  }, [filterData]);

  const handleShowMoreClick = () => {
    setDisplayedFlights((prevDisplayedFlights) => prevDisplayedFlights + 5);
  };
  return (
    <>
      {filteredFlights.slice(0, displayedFlights).map((flight, index) => (
        <FlightCard flight={flight.flight} key={index} />
      ))}
      {displayedFlights < filteredFlights.length && (
        <button className="showMoreButton" onClick={handleShowMoreClick}>
          Показать еще
        </button>
      )}
    </>
  );
};
