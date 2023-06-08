import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const SideScroll = (props) => {
  const { actions } = useContext(Context);
  const { markFavorite, checkFavorite } = actions;
  let aux = "";
  let info = props.data;
  let questions = [];
  if (props.title === "People") {
    aux = "characters";
    questions = ["Gender", "Eye color", "Hair color"];
  } else if (props.title === "Planets") {
    aux = "planets";
    questions = ["Population", "Terrain", "Climate"];
  } else if (props.title === "Vehicles") {
    aux = "vehicles";
    questions = ["Manufacturer", "Passengers", "Max speed"];
  }
  return (
    <>
      <div className="container-fluid d-flex mb-4 col-11">
        <div className="row col-12 overflow-hidden m-auto">
          <h1>{props.title}</h1>
          <div className="scroll overflow-scroll d-flex mt-1 ms-3">
            {info.map((people, index) => {
              return (
                /* Card map */
                <div
                  className="card col-12 d-flex me-2 mb-2 border border-warning flex-column justify-content-between"
                  key={index}
                  style={{ width: 300 + "px", height: "auto" }}
                >
                  <img
                    src={`https://starwars-visualguide.com/assets/img/${aux}/${people.uid}.jpg`}
                    className="card-img-top"
                    alt="Image not found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{people.properties?.name}</h5>
                    <p className="card-text">
                      {questions[0]}:{" "}
                      {aux === "characters"
                        ? people.properties?.gender
                        : aux === "planets"
                        ? people.properties?.population
                        : aux === "vehicles"
                        ? people.properties?.manufacturer
                        : ""}
                      <br></br>
                      {questions[1]}:{" "}
                      {aux === "characters"
                        ? people.properties?.eye_color
                        : aux === "planets"
                        ? people.properties?.terrain
                        : aux === "vehicles"
                        ? people.properties?.passengers
                        : ""}
                      <br></br>
                      {questions[2]}:{" "}
                      {aux === "characters"
                        ? people.properties?.hair_color
                        : aux === "planets"
                        ? people.properties?.climate
                        : aux === "vehicles"
                        ? people.properties?.max_atmosphering_speed
                        : ""}
                    </p>
                    <div className="mt-3 d-flex justify-content-between">
                      <Link
                        to={`/${aux}/${people._id}`}
                        className="btn btn-warning"
                      >
                        Read more
                      </Link>
                      <button
                        href="#"
                        className="btn btn-warning"
                        onClick={() => markFavorite(people)}
                      >
                        <i
                          className={`fa-${
                            checkFavorite(people) ? "solid" : "regular"
                          } fa-heart text-dark bg-warning`}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideScroll;
