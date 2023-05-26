import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useLocation } from "react-router-dom";

export const Details = () => {
  const [info, setInfo] = useState();
  const location = useLocation();
  const { id, item } = location.state;
  let aux = "";
  if (item === "characters") {
    aux = "people";
  } else {
    aux = item;
  }
  async function getData() {
    let response = await fetch(`https://www.swapi.tech/api/${aux}/${id}`);
    let data = await response.json();
    setInfo(data.result.properties);
  }
  const { store, actions } = useContext(Context);
  useEffect(() => {
    getData();
  }, []);
  console.log(info);
  return (
    <>
      <div className="container-fluid col-11">
        <div className="row">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{info?.name}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
