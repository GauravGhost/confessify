import { client_app_route_url } from "../../utils/helper";

export const LoginAction = (username, password, navigate) => (dispatch) => {
  dispatch({
    type: POST_TOKEN_BEGIN,
  });
  if (username === "koynakhare29@gmail.com" && password == "123") {
    const state = { username, user_id: "users.id" };
    dispatch({
      type: POST_TOKEN_SUCCESS,
      payload: "kfjlkdsfjlkjlk",
    });
    dispatch({
      type: LOGIN_SUCCESSFULLY,
      payload: state,
    });
    navigate(`${client_app_route_url}posts`, {
      state: { username, user_id: "users.id" },
    });
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
export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
