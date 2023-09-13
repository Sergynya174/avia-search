import { useState } from "react";
import FlightFilter from "../FlightFilter/FlightFilter.js";
import { FlightCardList } from "../FlightCardList/FlightCardList.js";
import "./FlightSearchResults.css";

function FlightSearchResults() {
  const [filterData, setFilterData] = useState({
    sortBy: "priceAscending",
    stops: [],
    priceTo: "",
    priceFrom: "",
    airlines: [],
  });

  const [sortDirection, setSortDirection] = useState("asc");

  const handleFilterChange = (newFilterData) => {
    if (newFilterData.sortBy !== filterData.sortBy) {
      setSortDirection("asc");
    } else {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    }

    setFilterData(newFilterData);
  };

  return (
    <div className="flight-search-results">
      <div className="flight-filters">
        <FlightFilter
          filterData={filterData}
          onFilterChange={handleFilterChange}
          sortDirection={sortDirection}
        />
      </div>
      <div className="flight-list">
        <FlightCardList filterData={filterData} />
      </div>
    </div>
  );
}

export default FlightSearchResults;
