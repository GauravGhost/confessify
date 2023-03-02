import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./routes/routes";
import Main from "./views/HeroSection/herosection";
import Home from "./views/home/home";
import { isEmpty } from "./utils/helper";
import { Routes, Route } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { insertToken } from "./store/action/loginAction";

import { client_app_route_url } from "./utils/helper";
import SignIn from "./views/login/login";
import Signup from "./views/signup/signup";
import About from "./views/about/about";

const App = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(insertToken());
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Loading.....</p>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route exact={true} path={`/`} element={<Main />}></Route>
        <Route
          exact={true}
          path={`${client_app_route_url}main`}
          element={<Main />}
        ></Route>
        <Route
          exact={true}
          path={`${client_app_route_url}login`}
          element={<SignIn />}
        ></Route>
        <Route
          exact={true}
          path={`${client_app_route_url}signup`}
          element={<Signup />}
        ></Route>
        <Route
          exact={true}
          path={`${client_app_route_url}about`}
          element={<About />}
        ></Route>
      </Routes>

      {!isEmpty(login.user_token) ? <Home /> : null}
    </>
  );
};

export default App;
