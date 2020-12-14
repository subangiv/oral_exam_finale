import { apiKeyforContact, urlToPost } from "./Vars";

function postContactRequest(data) {
  const dataToPost = JSON.stringify(data);

  fetch(urlToPost, {
    method: "post",
    headers: {
      "x-apikey": apiKeyforContact,
      "cache-control": "no-cache",
      "content-type": "application/json",
    },
    body: dataToPost,
    json: true,
  })
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
    })
    .then(() => console.error(data));
}

export const RestDB = { postContactRequest };
