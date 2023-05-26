import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer.js";

import { Home } from "./views/home";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import { Characters } from "./views/characters";
import { Details } from "./views/details.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/single/:theid" element={<Single />} /> */}
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:theid" element={<Details />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:theid" element={<Details />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:theid" element={<Details />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
