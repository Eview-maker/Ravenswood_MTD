document.getElementById('introBtn').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `
    <h2>Introduction</h2>
    <p>Ravenswood is a historic gold mining town in Queensland, known for its rich history and charming heritage buildings.</p>
  `;
});

document.getElementById('historyBtn').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `
    <h2>Gold Mining History</h2>
    <p>The discovery of gold in 1868 transformed Ravenswood into a bustling mining town. Learn about its peak and decline.</p>
  `;
});

document.getElementById('cultureBtn').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `
    <h2>Culture</h2>
    <p>Ravenswood is celebrated for its historic pubs, annual festivals, and the enduring spirit of its small community.</p>
  `;
});

document.getElementById('mapBtn').addEventListener('click', () => {
  document.getElementById('content').innerHTML = `
    <h2>Interactive Map</h2>
    <p>Explore key landmarks like the School of Arts Hall and Ravenswood Court House.</p>
    <p>(Interactive elements to be added later!)</p>
  `;
});