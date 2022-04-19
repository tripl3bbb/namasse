$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


$('[data-text]').on('keyup', function(){
  $(this).attr('data-text', $(this).text());
});

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  function chargebattery() {
    var a;
    a = document.getElementById("charging");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
  }
  chargebattery();
  setInterval(chargebattery, 5000);


  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
