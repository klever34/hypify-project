import React from "react";
import { getCookie } from "../app/auth-redux/authAPI";

var csrftoken = getCookie("csrftoken");
console.log({ csrftoken });
const CSRFToken = () => {
  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};
export default CSRFToken;
