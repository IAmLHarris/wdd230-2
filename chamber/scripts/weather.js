const requestURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=-33.4569&lon=-70.6483&appid=9e972cb2fc69ed1c08d9704b40ffe53e&units=imperial";
const cards = document.querySelector(".buiscards");
// [-33.4569, -70.6483]

async function apiFetch() {
  try {
    const response = await fetch(requestURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const tF = weatherData.main.temp.toFixed(0);
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;

  const smH = weatherData.wind.speed;
  if (tF <= 50 && smH > 3) {
    const windC = windChill(tF, smH);
    wind.textContent = `Wind Chill: ${windC.toFixed(1)}`;
  } else {
    wind.textContent = `Wind Chill: N/A`;
  }
}

function windChill(tF, smH) {
  const f =
    35.74 + 0.6215 * tF - 35.75 * smH ** 0.16 + 0.4275 * tF * smH ** 0.16;
  return f;
}

apiFetch();

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const wind = document.querySelector("#wind");
