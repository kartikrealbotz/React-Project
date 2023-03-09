import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../src/img/img-2.jpg"
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};
export default About;
