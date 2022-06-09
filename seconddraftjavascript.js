
const apiKey = 'pk.eyJ1IjoiaXNzaWVreXJpYWNvdSIsImEiOiJjbDNsb2M4ZjQwbWprM29xYXBzcnAwbGp1In0.JmanJ5MyQhlrjqZ_Q3hOJQ';

const map = L.map('map').setView([51.50685296029803, -0.127575925898119], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/issiekyriacou/cl3lvpo15005i15oe3f10725z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNzaWVreXJpYWNvdSIsImEiOiJjbDNsb2M4ZjQwbWprM29xYXBzcnAwbGp1In0.JmanJ5MyQhlrjqZ_Q3hOJQ', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);



// add marker
const marker1 = L.marker([51.50341081185338, -0.11954297281950693]).addTo(map)


let template = '<h3>London Eye</h3>'
marker1.bindPopup(template);



// add message - add .openPopup() if you want the message automatically open
// to add image add image tag inside '' - <img width="" height="" src="...jpg"/>
// you can also add a div between heading & image etc .. to seperate on a new line - <div style="text-align:center"> - to allign image in center underneath


//the original map style https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken} 
// to change back to originL style copy & paste URL above into L.tileLayer


// https://api.mapbox.com/styles/v1/issiekyriacou/cl3lof832001e15qtpx5fbj0m/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNzaWVreXJpYWNvdSIsImEiOiJjbDNsb2M4ZjQwbWprM29xYXBzcnAwbGp1In0.JmanJ5MyQhlrjqZ_Q3hOJQ
