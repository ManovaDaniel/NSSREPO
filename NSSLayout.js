import React from "react";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import Nssinhead from "../Components/nssinhead";

import NSSMain from "./NSSMain";

import NSSTeam1 from "./NSSTeam1"; // Ensure correct import

import NSSTeam2 from "./NSSTeam2";

import NSSTeam3 from "./NSSTeam3";



const NssLayout = () => {

  return (

    <div>

      <Nssinhead />

      <nav>

        <ul>

          <li><Link to="/nss">Home</Link></li>

          <li><Link to="/nss/team1">NSS Team 1</Link></li>

          <li><Link to="/nss/team2">NSS Team 2</Link></li>

          <li><Link to="/nss/team3">NSS Team 3</Link></li>

        </ul>

      </nav>

      <Outlet /> {/* This will load the nested routes */}

    </div>

  );

};



const NssRoutes = () => {

  return (

    <Routes>

      <Route path="/" element={<NssLayout />}>

        <Route index element={<NSSMain />} /> {/* Default NSS Page */}

        <Route path="team1" element={<NSSTeam1 />} />

        <Route path="team2" element={<NSSTeam2 />} />

        <Route path="team3" element={<NSSTeam3 />} />

      </Route>

    </Routes>

  );

};



export default NssRoutes;

 