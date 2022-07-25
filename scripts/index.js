window.onload = () =>{
    setTimeout( () =>{
    document.getElementById("loader").style.visibility = "hidden";
}, 1000)



particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var map = L.map('map').setView([-33.4499981, -70.687331]  , 17.4);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([-33.4499981, -70.687331]).addTo(map)
    .openPopup();


}