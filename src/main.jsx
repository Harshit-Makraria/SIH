import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Home,
  Events,
  Donate,
  Alumini,
  JobPortal,
  SignIn,
  SignOut,
  Otp,
} from "./components/Index.js";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
