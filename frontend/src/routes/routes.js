import React from "react";

import { client_app_route_url } from "../utils/helper";
import { Routes, Route } from "react-router-dom";
import Login from "../views/login/login";
import SignUp from "../views/signup/signup";
import Main from "../views/HeroSection/herosection";
import Home from "../views/home/home";
import About from "../views/about/about";
import Posts from "../views/home/posts";
import Search from "../views/search/search";
import Profile from "../views/profile/profile";
import CreatePost from "../views/CreatePost/createpost";
const RoutesPath = [
  {
    path: `${client_app_route_url}login`,
    exact: true,
    component: Login,
    name: "Login",
  },
  {
    path: `${client_app_route_url}signup`,
    exact: true,
    component: SignUp,
    name: "SignUp",
  },
  {
    path: `${client_app_route_url}main`,
    exact: true,
    component: Main,
    name: "main",
  },
  {
    path: `${client_app_route_url}home`,
    exact: true,
    component: Home,
    name: "home",
  },
  {
    path: `${client_app_route_url}about`,
    exact: true,
    component: About,
    name: "about",
  },
  {
    path: `${client_app_route_url}posts`,
    exact: true,
    component: Posts,
    name: "posts",
  },
  {
    path: `${client_app_route_url}search`,
    exact: true,
    component: Search,
    name: "search",
  },
  {
    path: `${client_app_route_url}profile`,
    exact: true,
    component: Profile,
    name: "profile",
  },
  {
    path: `${client_app_route_url}create`,
    exact: true,
    component: CreatePost,
    name: "create",
  },
];

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {RoutesPath.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              name={route.name}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default AllRoutes;
