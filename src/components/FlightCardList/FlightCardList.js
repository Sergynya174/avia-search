import { useState, useEffect } from "react";
import FlightCard from "../FlightCard/FlightCard";
import "./FlightCardList.css";
import flights from "../../flights.json";

export const FlightCardList = ({ filterData }) => {
  const [displayedFlights, setDisplayedFlights] = useState(5);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    let filteredFlights = flights.result.flights;

    if (filterData.airlines.length > 0) {
      filteredFlights = filteredFlights.filter((flight) =>
        filterData.airlines.includes(flight.flight.carrier.caption)
      );
    }

    if (filterData.stops.length > 0) {
      filteredFlights = filteredFlights.filter((flight) => {
        const segments = flight.flight.legs[0].segments.length - 1;
        return filterData.stops.includes(segments.toString());
      });
    }

    if (filterData.sortBy === "time") {
      filteredFlights.sort(
        (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
      );
    } else if (filterData.sortBy === "priceAscending") {
      filteredFlights.sort(
        (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
      );
    } else if (filterData.sortBy === "priceDescending") {
      filteredFlights.sort(
        (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
      );
    }

    setSortDirection(filterData.sortBy === "priceAscending" ? "asc" : "desc");

    setFilteredFlights(filteredFlights);
  }, [filterData]);

  const handleShowMoreClick = () => {
    setDisplayedFlights((prevDisplayedFlights) => prevDisplayedFlights + 5);
  };
  return (
    <>
      {filteredFlights.length === 0 ? (
        <div className="nothing-found">
          <p className="nothing-found-text">Ничего не найдено</p>
        </div>
      ) : (
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
      )}
    </>
  );
};
