const phonk = new Audio('sounds/phonk.mp3')
const clickSound = new Audio('sounds/click.mp3')
phonk.volume = 0.1

for (let i = 0; i < document.querySelectorAll('.card').length; i++) {
    document.querySelectorAll('.card')[i].addEventListener('mouseover', ()=>{
        document.querySelectorAll('.card')[i].style.transform = 'scale(1.02)';
        document.querySelectorAll('.card')[i].style.transition = '0.2s';
    })
}
$('.card').mouseleave(function () { 
    $('.card').css('transform', 'scale(1)');
});        


$('.btn-secondary').click(function () { 
    clickSound.play();
});


$(document).keypress(function (e) { 
    if (e.key == 'b') {
        phonkTog();
    }
});

function phonkTog() {
    if (phonk.paused == true) {
        phonk.play();
    } else {
        phonk.pause();
    }
}
$('#hf').toggle();
$('#gl').click(function (e) { 
    $('#hf').toggle(1000);
    
});

$('#phonkButton').click(function () { 
    phonkTog();
});

$('.btn-secondary').css('background-color', 'black');
$('.card').css('background-color', '#D3D3D3');

// click anywhere on the website to start the song
let starter = 1;
$('body').mouseover(function () {
    if (starter == 1) {
        phonkTog();
        if (phonk.paused == false) {
            starter = 0;
        }
    }
});
// how to w3
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }