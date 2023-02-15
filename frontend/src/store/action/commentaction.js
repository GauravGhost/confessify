import {
  client_app_route_url,
  getResponseHandler,
  mutationResponseHandler,
} from "../../utils/helper";
import { ALERT_SUCCESS } from "../reducer/alertReducer";
import axios from "axios";

export const AddCommentAction = (object) => (dispatch) => {
  dispatch({
    type: COMMENT_LOADING,
  });

  axios
    .post("https://dummyjson.com/products/add", object)
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
        type: COMMENT_FAIL,
      });
      return dispatch({
        type: ALERT_SUCCESS,
        payload: { boolean: true, message: error, error: true },
      });
    });
};
export const AddLikeAction = (object) => (dispatch) => {
  axios
    .post(" https://dummyjson.com/products/add")
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
        type: LIKE_FAIL,
      });
      return dispatch({
        type: ALERT_SUCCESS,
        payload: { boolean: true, message: error, error: true },
      });
    });
};
export const COMMENT_LOADING = "COMMENT_LOADING";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export const COMMENT_FAIL = "COMMENT_FAIL";
export const LIKE_LOADING = "LIKE_LOADING";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAIL = "LIKE_FAIL";
export const LOADING_FALSE = "LOADING_FALSE";
