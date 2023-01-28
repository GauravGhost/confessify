import { client_app_route_url } from "../../utils/helper";

export const LoginAction = (uername, password, navigate) => (dispatch) => {
  console.log(uername, password);
  dispatch({
    type: POST_TOKEN_BEGIN,
  });
  if (uername === "koynakhare29@gmail.com" && password == "123") {
    console.log("dfn");
    dispatch({
      type: POST_TOKEN_SUCCESS,
      payload: "kfjlkdsfjlkjlk",
    });
    navigate(`${client_app_route_url}posts`);
  }
};

export const insertToken = () => (dispatch) => {};

export const logoutAction = (navigate) => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  navigate(`${client_app_route_url}main`);
};

export const POST_TOKEN_BEGIN = "POST_TOKEN_BEGIN";
export const POST_TOKEN_SUCCESS = "POST_TOKEN_SUCCESS";
export const POST_TOKEN_FAIL = "POST_TOKEN_FAIL";
export const INSERT_TOKEN_SUCCESS = "INSERT_TOKEN_SUCCESS";
export const INSERT_TOKEN_FAIL = "INSERT_TOKEN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
