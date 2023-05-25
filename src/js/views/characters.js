import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Characters = () => {
  const [chars, setChars] = useState([
    JSON.parse(localStorage.getItem("people")) || [],
  ]);
  const { store, actions } = useContext(Context);
  async function getAllCharacters() {
    let response = await fetch(
      `https://www.swapi.tech/api/people?page=1&limit=82`
    );
    let data = await response.json();
    localStorage.setItem("allCharacters", JSON.stringify(data));
    setChars(data.results);
  }
  getAllCharacters();
  return (
    <>
      <div className="container-fluid col-11 d-flex">
        <div className="row m-auto justify-content-center">
          {chars.map((people, index) => {
            return (
              <div
                className="card col-1 d-flex me-2 mb-2 border border-warning flex-column justify-content-between p-0"
                key={index}
                style={{ width: 250 + "px", height: "auto" }}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{people.name}</h5>
                  <p className="card-text">{people.films}</p>
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
