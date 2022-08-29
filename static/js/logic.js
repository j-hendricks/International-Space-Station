
fetch("https://api.wheretheiss.at/v1/satellites/25544")
.then(response => {
    return response.json();
})
.then(data => {

    console.log(data);

    var lat = data.latitude;
    var lng = data.longitude;

    var map = L.map('mapid').setView([lat, lng], 3);

    var marker = L.circleMarker([lat, lng], {radius: data.velocity / 2000}).addTo(map);

    marker.bindPopup(`<b>Altitude: ${Math.round(data.altitude)} m</b> <br>Velocity: ${Math.round(data.velocity)} m/s`).openPopup();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);  
    
});






