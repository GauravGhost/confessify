import {
  POST_LOADING,
  POST_SUCCESS,
  POST_FAIL,
  LOADING_FALSE,
} from "../action/createpostAction";

const initialState = {
  posts: [],
  post: {},
  loading: false,
  success: false,
};

export default (state = initialState, action) => {
  console.log(action, "  =====  action");
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        success: true,
      };
    case POST_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
      };

    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
