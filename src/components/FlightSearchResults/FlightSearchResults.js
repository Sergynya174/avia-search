import { useState } from "react";
import FlightFilter from "../FlightFilter/FlightFilter.js";
import { FlightCardList } from "../FlightCardList/FlightCardList.js";
import "./FlightSearchResults.css";

function FlightSearchResults() {
  const [filterData, setFilterData] = useState({
    sortBy: "priceAscending",
    stops: [],
    priceRange: { min: 0, max: 1000000 },
    airlines: [],
  });

  const handleFilterChange = (newFilterData) => {
    setFilterData(newFilterData);
  };

  return (
    <div className="flight-search-results">
      <div className="flight-filters">
        <FlightFilter
          filterData={filterData}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="flight-list">
        <FlightCardList filterData={filterData} />
      </div>
    </div>
  );
}

export default FlightSearchResults;
