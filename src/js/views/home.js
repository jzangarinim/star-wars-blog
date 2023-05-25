import React, { useContext } from "react";
import "../../styles/home.css";
import SideScroll from "../component/SideScroll.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { store } = useContext(Context);
  const { people, planets, vehicles } = store;
  document.title = "Star Wars Blog";
  return (
    <>
      <SideScroll title="People" data={people} />
      <SideScroll title="Planets" data={planets} />
      <SideScroll title="Vehicles" data={vehicles} />
    </>
  );
};
