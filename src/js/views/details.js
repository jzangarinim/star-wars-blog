import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const Details = () => {
  const [rand] = useState(Math.floor(Math.random() * 59 + 1));
  const [info, setInfo] = useState({});
  const { store } = useContext(Context);
  const { people } = store;
  const params = useParams();
  function getDetails() {
    if (params.nature != "characters") {
      let item = store[params.nature].find((item) => item._id == params.theid);
      setInfo(item);
    } else {
      let item = people.find((item) => item._id == params.theid);
      setInfo(item);
    }
  }
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <div className="container-fluid col-11">
        <div className="row">
          <div className="card mb-3 p-0 border border-warning">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/${params.nature}/${info.uid}.jpg`}
                  className="img-fluid rounded-start"
                  alt="Image not found"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{info.properties?.name}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated {rand} {rand == 1 ? "min" : "mins"} ago.
                    </small>
                  </p>
                  {params.nature === "characters" && (
                    <div className="card-text d-flex justify-content-evenly">
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Height:<br></br> {info.properties?.height} cm
                      </div>
                      <div className="text-body-secondary  border border-warning p-2 rounded text-center">
                        Weight:<br></br> {info.properties?.mass} kg
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Eye color:<br></br> {info.properties?.eye_color}
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Hair color:<br></br> {info.properties?.hair_color}
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Gender:<br></br> {info.properties?.gender}
                      </div>
                    </div>
                  )}
                  {params.nature === "planets" && (
                    <div className="card-text d-flex justify-content-evenly">
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Climate:<br></br> {info.properties?.climate}
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Diameter:<br></br> {info.properties?.diameter} km
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Population:<br></br> {info.properties?.population}
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Terrain:<br></br> {info.properties?.terrain}
                      </div>
                    </div>
                  )}
                  {params.nature === "vehicles" && (
                    <div className="card-text d-flex justify-content-evenly">
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Model:<br></br> {info.properties?.model}
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Manufacturer:<br></br> {info.properties?.manufacturer}
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Cost:<br></br> {info.properties?.cost_in_credits}{" "}
                        credits
                      </div>
                      <div className="text-body-secondary border border-warning p-2 rounded text-center">
                        Passengers:<br></br> {info.properties?.passengers}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
