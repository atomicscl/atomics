window.onload = () =>{
    setTimeout( () =>{
    document.getElementById("loader").style.visibility = "hidden";
}, 1000)



particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});


}