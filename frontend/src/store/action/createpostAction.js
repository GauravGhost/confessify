import {
  client_app_route_url,
  getResponseHandler,
  mutationResponseHandler,
} from "../../utils/helper";
import { ALERT_SUCCESS } from "../reducer/alertReducer";
import axios from "axios";
export const getAllPosts = () => (dispatch) => {
  dispatch({
    type: POST_LOADING,
  });

  axios
    .get("http://localhost:5000/posts")
    .then((response) => {
      const [error, success, message, data] = mutationResponseHandler(
        response,
        "blogs"
      );
      dispatch({
        type: LOADING_FALSE,
      });

      if (error) {
        dispatch({
          type: ALERT_SUCCESS,
          payload: { boolean: true, message: message, error: true },
        });
      }

      if (!success) {
        dispatch({
          type: POST_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: POST_FAIL,
      });
      return dispatch({
        type: ALERT_SUCCESS,
        payload: { boolean: true, message: error, error: true },
      });
    });
};
export const CreatepostAction = (object) => (dispatch) => {
  dispatch({
    type: POST_LOADING,
  });
  console.log(object);
  axios
    .post(" http://localhost:5000/posts", object)
    .then((response) => {
      const [error, success, message, data] = mutationResponseHandler(
        response,
        "blogs"
      );
      dispatch({
        type: LOADING_FALSE,
      });

      if (error) {
        dispatch({
          type: ALERT_SUCCESS,
          payload: { boolean: true, message: message, error: true },
        });
      }

      if (!success) {
        dispatch({
          type: ALERT_SUCCESS,
          payload: { boolean: true, message: "success", error: false },
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: POST_FAIL,
      });
      return dispatch({
        type: ALERT_SUCCESS,
        payload: { boolean: true, message: error, error: true },
      });
    });
};
export const POST_LOADING = "POST_LOADING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";
export const LOADING_FALSE = "LOADING_FALSE";
