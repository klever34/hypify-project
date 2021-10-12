import axios from "axios";
import { baseUrl } from "../../constants/index";
import jQuery from "jquery";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export function getCookie(name: string) {
  var cookieValue = null;
  console.log("here");

  if (document.cookie && document.cookie !== "") {
    console.log("here 1");
    var cookies = document.cookie.split(";");
    console.log("here 2");
    for (var i = 0; i < cookies.length; i++) {
      console.log("here 3");
      var cookie = jQuery.trim(cookies[i]);
      console.log({ cookie });
      console.log({ name });

      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        console.log({ cookieValue });

        break;
      }
    }
  }
  return cookieValue;
}

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export async function loginUser(userObj: object) {
  try {
    var csrftoken = getCookie("csrftoken");
    console.log({ csrftoken });
    const response = await axios.post(`${baseUrl}auth/login/`, userObj, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken":
          "TXTSqQyUDqbYjSvVbd7gqSj2eWJtgbKZkpZrIRaPy2ASM3NWKrISj7cN7Z0NQatR",
      },
    });
    console.log({ response });
    return;
    // return response.data;
  } catch (error: any) {
    console.log(error.response);

    return error.response.data;
  }
}

export async function registerUser(userObj: object) {
  try {
    const response = await axios.post(`${baseUrl}auth/register/`, userObj);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}
