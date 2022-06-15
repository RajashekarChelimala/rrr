import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainNavigation from "./Navigation/MainNavigation";

import Home from "./Home";
import Footer from "./Footer";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import AddNewRoom from "./rooms/AddNewRoom";

import MapBox from "./Pages/MapBox";

import MyAccount from "./Pages/MyAccount";
import Test from "./Test";

function App() {
  return (
    <Router>
      <nav>
        <MainNavigation />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addnewroom" element={<AddNewRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/test" element={<Test />} />

        <Route
          path="/map"
          element={
            <MapBox
              address="shaligouraram"
              origin="basar"
              destination="nizamabad"
            />
          }
        />

        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
