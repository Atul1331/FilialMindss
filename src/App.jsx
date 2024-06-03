import React, { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/register/register";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import { Typography } from "@mui/material";
import Footer from "./components/footer/footer";
import Stories from "./pages/stories";
import ChildDashboard from "./pages/ChildDashboard";
import Games from "./pages/Games";
import ParentChild from "./pages/ParentChild";
import ParentDashboard from "./pages/ParentDashboard";
import GamesSec from "./pages/gamesSec";
import ChildInfo from "./components/ChildInfo"
import ChildSkill from "./components/ChildSkill"
// import Activity from "./pages/Activity";
// import ActivityHome from "./pages/ActivityHome";
// import ChildForm from "./pages/ChildForm";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/child-info" element={<ChildInfo />} />
        <Route path="/child-skill" element={<ChildSkill />} />
        <Route path="/parent-child" element={<ParentChild />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/games" element={<Games />} />
        <Route
          path="/games/chess"
          element={<GamesSec cdn="https://cdn.htmlgames.com/Chess/" />}
        />
        <Route
          path="/games/illuminate"
          element={<GamesSec cdn="https://cdn.htmlgames.com/Illuminate1/" />}
        />
        <Route
          path="/games/chocolate-factory"
          element={
            <GamesSec cdn="https://cdn.htmlgames.com/ChocolateFactory/" />
          }
        />
        <Route
          path="/games/fruit-cubes"
          element={<GamesSec cdn="https://cdn.htmlgames.com/FruitCubes/" />}
        />
        <Route
          path="/games/flower-burst"
          element={<GamesSec cdn="https://cdn.htmlgames.com/FlowerBurst/" />}
        />
        {/* <Route
          path="/games/chess"
          element={<GamesSec cdn="https://cdn.htmlgames.com/Chess/" />}
        /> */}
        {/* <Route path="/activity" element={<Activity />} />
        <Route path="/activity-home" element={<ActivityHome />} />
        <Route path="/child-form" element={<ChildForm />} /> */}
        {/* <Route path="/games" element={<Games />} /> */}
      </Routes>
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Footer />
      )}
    </>
    // <Stories />
  );
}

export default App;
