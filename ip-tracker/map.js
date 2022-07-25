let iconCoordinates = L.icon({
  iconUrl: 'images/icon-location.svg',
  iconSize: [40, 50],
  iconAnchor: [25, 55]
});

function setMap(lat, lng) {
  const map = new L.Map('map', {
    attributionControl: false,
    zoomControl: false
  });
  map.setView(new L.LatLng(lat, lng), 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'OSM'
  }).addTo(map);

  L.marker([lat, lng], { icon: iconCoordinates }).addTo(map);
}