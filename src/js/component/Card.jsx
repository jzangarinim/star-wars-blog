import React from "react";

const Card = () => {
  return (
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
          <Link to={`/${aux}/${people._id}`} className="btn btn-warning">
            Read more
          </Link>
          <button href="#" className="btn btn-warning">
            <i className="fa-regular fa-heart text-dark bg-warning"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
