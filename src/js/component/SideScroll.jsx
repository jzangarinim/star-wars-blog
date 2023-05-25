import React from "react";
import { Link } from "react-router-dom";

const SideScroll = (props) => {
  let aux = "";
  let info = props.data.results;
  if (props.title == "People") {
    aux = "characters";
  } else if (props.title == "Planets") {
    aux = "planets";
  } else if (props.title == "Vehicles") {
    aux = "vehicles";
  }
  return (
    <>
      <div className="container-fluid d-flex mb-4 col-11">
        <div className="row col-12 overflow-hidden m-auto">
          <h1>{props.title}</h1>
          <div className="overflow-scroll d-flex mt-1 ms-3">
            {info.map((people, index) => {
              return (
                <div
                  className="card col-12 d-flex me-2 mb-2 border border-warning flex-column justify-content-between"
                  key={index}
                  style={{ width: 300 + "px", height: "auto" }}
                >
                  <img
                    src={`https://starwars-visualguide.com/assets/img/${aux}/${people.uid}.jpg`}
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
            <div className="d-flex justify-content-center align-items-center">
              <Link to={`/${aux}`}>
                <button className="btn btn-warning">See all {aux}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideScroll;
