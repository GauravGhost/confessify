export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const client_app_route_url = "/admin/";

/*------------------------------------------------------------------------------------------------------------------------------*/

export const getResponseHandler = (response, key) => {
  let success = false;
  let error = false;
  let message = "";
  let data = [];

  if (response && response.data && response.data[key]) {
    let res = response.data[key];
    if (res.message) {
      if (res.message.success) {
        if (res.data) {
          data = res.data;
        }
        success = true;
      } else {
        error = true;
      }
      if (res.message.message) {
        message = res.message.message;
      } else {
        message = "Something went wrong!";
      }
    } else {
      error = true;
      message = "Something went wrong!";
    }
  } else {
    message = "Something went wrong!";
  }

  return [error, success, message, data];
};

export const mutationResponseHandler = (response, key) => {
  let success = false;
  let error = false;
  let message = "";

  if (response && response.data && response.data[key]) {
    let res = response.data[key];
    if (res.message) {
      if (res.success) {
        success = true;
      } else {
        error = true;
      }
      if (res.message) {
        message = res.message;
      } else {
        message = "Something went wrong!";
      }
    } else {
      error = true;
      message = "Something went wrong!";
    }
  } else {
    message = "Something went wrong!";
  }

  return [error, success, message];
};
