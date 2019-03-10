const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const displayForecast = document.querySelector(".display__forecast");
const displayLocation = document.querySelector(".display__location");
const inputValue = document.querySelector("input");

const addDisplayHtml = ({ forecast, location, error }) => {
  displayForecast.textContent = "";
  displayLocation.textContent = "";
  if (error) {
    displayForecast.textContent = error;
    inputValue.value = "";
  } else {
    displayForecast.textContent = forecast;
    displayLocation.textContent = location;
    inputValue.value = "";
  }
};

const fetchForecast = location => {
  axios
    .get(`/weather?address=${location}`)
    .then(response => {
      addDisplayHtml(response.data);
      console.log(response.data);
    })
    .catch(e => console.log("error: ", e));
};

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  displayForecast.textContent = "Loading ...";
  displayLocation.textContent = "";
  const location = search.value;
  fetchForecast(location);
});
