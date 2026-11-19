// import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Message from "./pages/Message";
import OurStory from "./pages/OurStory";
import WeddingDetails from "./pages/WeddingDetails";
import Rsvp from "./pages/Rsvp";
import Registry from "./pages/Registry";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/message" element={<Message />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/weddingdetails" element={<WeddingDetails />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Routes>
    </div>
  );
};

export default App;
