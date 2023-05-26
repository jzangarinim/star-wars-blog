import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Planets = () => {
  document.title = "Planets";
  const [planets, setPlanets] = useState([
    JSON.parse(localStorage.getItem("allPlanets")) || [],
  ]);
  async function getAllPlanets() {
    let response = await fetch(
      `https://www.swapi.tech/api/planets?page=1&limit=60`
    );
    let data = await response.json();
    localStorage.setItem("allPlanets", JSON.stringify(data));
    setPlanets(data.results);
  }
  getAllPlanets();
  return (
    <>
      <div className="container-fluid col-11 d-flex">
        <div className="row m-auto justify-content-center">
          {planets.map((planet, index) => {
            return (
              <div
                className="card col-1 d-flex me-2 mb-2 border border-warning flex-column justify-content-between p-0"
                key={index}
                style={{ width: 250 + "px", height: "auto" }}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">{planet.films}</p>
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
