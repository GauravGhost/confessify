import {
  COMMENT_LOADING,
  COMMENT_SUCCESS,
  COMMENT_FAIL,
  LIKE_LOADING,
  LIKE_SUCCESS,
  LIKE_FAIL,
  LOADING_FALSE,
} from "../action/commentaction";

const initialState = {
  comments: [],

  loading: false,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        success: true,
      };
    case COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case LIKE_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case LIKE_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        success: true,
      };
    case LIKE_FAIL:
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
