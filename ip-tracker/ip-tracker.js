const input = document.getElementById('input-value');
const submit = document.getElementById('submit');

window.addEventListener('load', (event) => {
  tracker();
});

submit.addEventListener('click', (event) => {
  tracker();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
  }
});


function tracker() {
  let api_key = 'at_2ZjVAR1pCOsRjzuYGEQMpzV7AXhmE';
  let url = "https://geo.ipify.org/api/v2/country,city?apiKey=" +
  api_key +
  "&ipAddress=" +
  input.value;

  fetch(url)
    .then((res) => res.json())
    .then((data) => getData(data))
    .catch(function (err) {
      err = "Nothing to see here.."
      alert(err);
    })
}   

function getData(data) {
  document.querySelector('[data-ip]').innerHTML = data.ip;
  document.querySelector('[data-location]').innerHTML =
  `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
  document.querySelector('[data-timezone]').innerHTML = data.location.timezone;
  document.querySelector('[data-isp]').innerHTML = data.isp;
}


// var map = L.map('map').setView([51.5, -0.09], 13);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);
// var marker = document.getElementById('marker');
// L.marker([51.5, -0.09]).addTo(map);