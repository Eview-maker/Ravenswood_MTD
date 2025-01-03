document.addEventListener('DOMContentLoaded', () => {
  // Initialize the map
  const map = L.map('map').setView([-20.0961, 146.8913], 14);

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for historic locations
  const markers = [
    {
      coords: [-20.0961, 146.8913],
      title: 'Imperial Hotel',
      description: "A historic pub that serves as a testament to Ravenswood's vibrant past."
    },
    {
      coords: [-20.0939, 146.8951],
      title: 'Masonic Temple',
      description: "Built in 1904, the temple is one of Ravenswood's most iconic buildings."
    }
  ];

  // Add markers and popups to the map
  markers.forEach((marker, index) => {
    L.marker(marker.coords)
      .addTo(map)
      .bindPopup(`
        <h3>${marker.title}</h3>
        <p>${marker.description}</p>
        <button onclick="playSound('sound${index + 1}.mp3')">Play Sound</button>
      `);
  });
});

// Global audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(url) {
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => {
      const soundSource = audioContext.createBufferSource();
      soundSource.buffer = buffer;
      soundSource.connect(audioContext.destination);
      soundSource.start();
    })
    .catch(err => console.error('Audio playback error:', err));
}
