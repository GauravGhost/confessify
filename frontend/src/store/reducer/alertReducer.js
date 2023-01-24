export const ALERT_SUCCESS = "ALERT_SUCCESS";

const initialState = {
  success: false,
  message: "",
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      console.log("action");
      return {
        success: action.payload.boolean,
        message: action.payload.message,
        error: action.payload.error || false,
      };
    default:
      return state;
  }
};
