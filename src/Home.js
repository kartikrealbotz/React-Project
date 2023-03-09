import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../src/img/img-1.jpeg"

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};
export default Home;
