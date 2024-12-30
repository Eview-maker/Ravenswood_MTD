// Initialize the map
const map = L.map('map').setView([-20.0961, 146.8913], 14); // Ravenswood's coordinates

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for historic locations
const markers = [
  {
    coords: [-20.0961, 146.8913],
    title: 'Imperial Hotel',
    description: 'A historic pub that serves as a testament to Ravenswood\'s vibrant past.',
  },
  {
    coords: [-20.0939, 146.8951],
    title: 'Masonic Temple',
    description: 'Built in 1904, the temple is one of Ravenswood\'s most iconic buildings.',
  },
];

markers.forEach(marker => {
  L.marker(marker.coords)
    .addTo(map)
    .bindPopup(`<h3>${marker.title}</h3><p>${marker.description}</p>`);
});
