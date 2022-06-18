import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
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
import MyRooms from "./rooms/MyRooms";

import RoomCard from "./rooms/RoomCard";
import UpdateRoom from "./rooms/UpdateRoom";

let logoutTimer;

function App() {
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); // one hour
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addnewroom" element={<AddNewRoom />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myrooms" element={<MyRooms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/updateroom/:roomId" element={<UpdateRoom />} />
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
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testroomcard" element={<RoomCard />} />
        <Route path="/updateroom/:roomId" element={<UpdateRoom />} />

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
