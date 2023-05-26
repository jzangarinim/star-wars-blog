import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Vehicles = () => {
  document.title = "Vehicles";
  const [vehicles, setVehicles] = useState([
    JSON.parse(localStorage.getItem("allVehicles")) || [],
  ]);
  async function getAllVehicles() {
    let response = await fetch(
      `https://www.swapi.tech/api/vehicles?page=1&limit=39`
    );
    let data = await response.json();
    localStorage.setItem("allVehicles", JSON.stringify(data));
    setVehicles(data.results);
  }
  getAllVehicles();
  return (
    <>
      <div className="container-fluid col-11 d-flex">
        <div className="row m-auto justify-content-center">
          {vehicles.map((vehicle, index) => {
            return (
              <div
                className="card col-1 d-flex me-2 mb-2 border border-warning flex-column justify-content-between p-0"
                key={index}
                style={{ width: 250 + "px", height: "auto" }}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">{vehicle.films}</p>
                  <div className="d-flex justify-content-between">
                    <Link href="#" className="btn btn-warning">
                      Read more
                    </Link>
                    <Link href="#" className="btn btn-warning">
                      <i className="fa-regular fa-heart text-dark bg-warning"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
