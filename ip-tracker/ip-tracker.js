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
  let apiKey = 'at_2ZjVAR1pCOsRjzuYGEQMpzV7AXhmE';
  let url = "https://geo.ipify.org/api/v2/country,city?apiKey=" +
  apiKey +
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

  let lat = data.location.lat;
  let lng = data.location.lng;

  const container = L.DomUtil.get('map');
  if (container != null) {
    container._leaflet_id = null;
  }

  setMap(lat, lng);
}