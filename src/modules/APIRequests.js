import { url, apiKey } from "./Vars";

function getApplications(callback, para) {
  fetch(url + "applications", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
      callback(data);
    })
    .then((data) => console.error(data));
}

export const RestDB = { getApplications };
