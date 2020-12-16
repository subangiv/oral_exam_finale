function getApplications(callback, parameter, loading) {
    fetch('https://exampollopollo-e360.restdb.io/rest/applications?q={"status": "open"}' + parameter, {
        method: "get",
        headers: {
        "x-apikey": "5fc678a84af3f9656800d169",
        "cache-control": "no-cache",
      },
    })
    .then((e) => e.json())
    .then((data) => {
    console.log(data);
    callback(data);
    })
    .then(() => loading(false))
}

function updateApplication(id, data) {
    const postData = JSON.stringify(data);
    fetch(`https://exampollopollo-e360.restdb.io/rest/applications/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5fc678a84af3f9656800d169",
        "cache-control": "no-cache",
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
      });
}

const data = {
    getApplications,
    updateApplication
}

export default data;