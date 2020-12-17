import { url, apiKey } from "../../../modules/Vars";
function postContactRequest(data) {
  const dataToPost = JSON.stringify(data);

  fetch(url + "inquiries", {
    method: "post",
    headers: {
      "x-apikey": apiKey,
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
