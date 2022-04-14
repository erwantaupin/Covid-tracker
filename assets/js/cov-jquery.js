var api = "https://disease.sh/v3/covid-19/all";
fetch(api)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
function plotData(data) {}
