import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero"></Hero>
      <Banner title="Rooms" subtitle="Rooms starting at Rs. 5000/=">
        <Link to="/rooms" className="btn btn-warning">
          Our Rooms
        </Link>
          </Banner>
          <Services />
    </>
  );
};

export default Home;
