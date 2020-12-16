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
function postADonation(personalData, cardData, billing) {
  const mergedData = JSON.stringify({
    ...cardData,
    ...personalData,
    ...billing,
  });
  console.log(mergedData);
  fetch(url + "donor", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    body: mergedData,
    json: true,
  })
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
    })
    .then(() => console.error(mergedData));
}

export const RestDB = { getApplications, postADonation };
