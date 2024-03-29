let buttonPlay = document.querySelector('.play');
let video = document.querySelector('.header-video');

let getVideo = function() {
    video.innerHTML = `<iframe width="${video.offsetWidth}" height="${video.clientHeight}" src="https://www.youtube.com/embed/p94QPaI4SxE?autoplay=1" frameborder="0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

buttonPlay.addEventListener('click', getVideo);


$(document).ready(function(){
    $('.customers-wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        vertical: true,
        swipeToSlide: true,
        verticalSwiping: true,
        prevArrow: '.arrow-up',
        nextArrow: '.arrow-down',
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 1,
              vertical: false,
              verticalSwiping: false,
              autoplay: false,
            }
          },
        ]
    });
  });

new WOW().init();


let membersSlider = document.getElementsByName('our-members');
let currentSlide = 1;
function changeSlide() {
  currentSlide == 2 ? currentSlide = 0 : currentSlide++;
  membersSlider[currentSlide].checked = true;
}

let timer = setInterval(changeSlide, 5000);

function setSlide(i) {
  clearInterval(timer);
  currentSlide = i;
  timer = setInterval(changeSlide, 5000);
}

for(let i = 0; i < membersSlider.length; i++) {
  membersSlider[i].addEventListener('click',() => setSlide(i));
}



