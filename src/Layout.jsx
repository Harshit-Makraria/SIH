import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
  Home,
  Events,
  Alumini,
  Donate,
  JobPortal,
  SignIn,
  SignUp,
} from "./components/Index";

function Layout() {
  return (
    <>
      <Header />
      <Home />
      <SignIn />
      <Events />
      <Alumini />
      <Donate />
      <JobPortal />
      <SignUp />
      <Footer />
    </>
  );
}

export default Layout;
