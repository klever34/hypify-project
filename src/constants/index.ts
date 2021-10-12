// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

export const baseUrl = `https://smart-edge-backend-staging.herokuapp.com/`;

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentMonth = new Date().getMonth();
export const actualMonth: string[] = [];
for (let i = 0; i <= currentMonth; i++) {
  actualMonth.push(months[i]);
}

export const monthsName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
