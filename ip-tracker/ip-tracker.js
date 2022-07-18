const inputValue = document.getElementById('input-value');
const submit = document.getElementById('submit');
let ipAddress = inputValue.value;

function getIP() {
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2ZjVAR1pCOsRjzuYGEQMpzV7AXhmE&ipAddress=${ipAddress}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('[data-ip]').innerHTML = data.ip;
      document.querySelector('[data-location]').innerHTML =
      `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
      document.querySelector('[data-timezone]').innerHTML = data.location.timezone;
      document.querySelector('[data-isp]').innerHTML = data.isp;
    })
    .catch(err => {
      err = 'oops, invalid input';
      alert(err);
    });
}
getIP()


const search = document.getElementById('search');
search.addEventListener('submit', (e) => {
  e.target.value = ipAddress;
  getIP();
});