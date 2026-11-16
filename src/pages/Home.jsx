// import React from 'react'

import Navbar from "../components/Navbar";
import pg from "../assets/pg.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={pg} alt="pic" className="h-[100vh] w-full object-cover" />
      </div>
    </div>
  );
};

export default Home;
