const api = "https://localhost:3000/"

// Using Fetch
fetch(api, { method: "GET"})
  .then( function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  })