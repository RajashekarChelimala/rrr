import "./App.css";
import React, { useState, useCallback } from "react";
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

import { AuthContext } from "./context/auth-context";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addnewroom" element={<AddNewRoom />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addnewroom" element={<AddNewRoom />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="*"
          element={
            <h1>
              Error
              <p>Error</p>
              <p>Error</p>
              <p>Error</p>
            </h1>
          }
        />
        <Route
          path="/map"
          element={
            <MapBox
              address="shaligouraram"
              origin="basar"
              destination="nakrekal"
            />
          }
        />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <nav id="mainnavigation">
          <MainNavigation />
        </nav>
        {routes}
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}
export default App;
