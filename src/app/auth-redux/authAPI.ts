import axios from "axios";
import { baseUrl } from "../../constants/index";
import jQuery from "jquery";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export function getCookie(name: string) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        console.log({ cookieValue });

        break;
      }
    }
  }
  return cookieValue;
}

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
