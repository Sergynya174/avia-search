import React from "react";
import "./FlightFilter.css";

function FlightFilter({ filterData, onFilterChange }) {
  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedFilterData = { ...filterData };

      if (!updatedFilterData[name]) {
        updatedFilterData[name] = [];
      }

      if (checked) {
        updatedFilterData[name].push(value);
      } else {
        updatedFilterData[name] = updatedFilterData[name].filter(
          (item) => item !== value
        );
      }

      onFilterChange(updatedFilterData);
    } else if (type === "text") {
      onFilterChange({ ...filterData, [name]: value });
    }
  };

  return (
    <div className="flight-filter">
      <form className="form" onChange={handleFormChange}>
        <div className="input-group">
          <p className="title-input">Сортировать</p>
          <label className="container-input">
            <input
              className="radio-input"
              type="radio"
              defaultChecked={true}
              name="sortBy"
              value="priceAscending"
            />
            <p className="text">- по возрастанию цены</p>
          </label>
          <label className="container-input">
            <input
              className="radio-input"
              type="radio"
              name="sortBy"
              value="priceDescending"
            />
            <p className="text">- по убыванию цены</p>
          </label>
          <label className="container-input">
            <input
              className="radio-input"
              type="radio"
              name="sortBy"
              value="time"
            />
            <p className="text">- по времени в пути</p>
          </label>
        </div>
        <div className="input-group">
          <p className="title-input">Фильтровать</p>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="stops"
              value="0"
            />
            <p className="text">- Без пересадок</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="stops"
              value="1"
            />
            <p className="text">- 1 пересадка</p>
          </label>
        </div>
        <div className="input-group">
          <p className="title-input">Цена</p>
          <label className="container-input">
            <p className="text">От</p>
            <input className="input" type="text" name="priceRange.min" />
          </label>
          <label className="container-input">
            <p className="text">До</p>
            <input className="input" type="text" name="priceRange.max" />
          </label>
        </div>
        <div className="input-group">
          <p className="title-input">Авиакомпании</p>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="Air France"
            />
            <p className="text">- Air France</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="KLM"
            />
            <p className="text">- KLM</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="Аэрофлот - российские авиалинии"
            />
            <p className="text">- Аэрофлот - российские авиалинии</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="TURK HAVA YOLLARI A.O."
            />
            <p className="text">- TURK HAVA YOLLARI A.O.</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="Finnair Oyj"
            />
            <p className="text">- Finnair Oyj</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="Air Baltic Corporation A/S"
            />
            <p className="text">- Air Baltic Corporation A/S</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="Alitalia Societa Aerea Italiana"
            />
            <p className="text">- Alitalia Societa Aerea Italiana</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="Pegasus Hava Tasimaciligi A.S."
            />
            <p className="text">- Pegasus Hava Tasimaciligi A.S.</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="Brussels Airlines"
            />
            <p className="text">- Brussels Airlines</p>
          </label>
          <label className="container-input">
            <input
              className="checkbox-input"
              type="checkbox"
              defaultChecked={false}
              name="airlines"
              value="LOT Polish Airlines"
            />
            <p className="text">- LOT Polish Airlines</p>
          </label>
        </div>
      </form>
    </div>
  );
}

export default FlightFilter;
