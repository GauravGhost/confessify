import { client_app_route_url } from "../utils/helper";
import { Routes, Route } from "react-router-dom";
import Login from "../views/login/login";
import SignUp from "../views/signup/signup";
import Main from "../views/HeroSection/herosection";
import Home from "../views/home/home";
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
];

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {RoutesPath.map((route, index) => {
          console.log("AllRoutes ===", route);
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
