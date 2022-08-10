const slides = document.querySelectorAll('.slide');
const markers = document.querySelectorAll('.marker');

let indexValue = 0;
function slideShow() {
  for(let x = 0; x < slides.length; x++) {
    slides[x].style.opacity = '0';
    slides[x].style.transform = 'translateX(900px)';
  }

  for(let i = 0; i < markers.length; i++) {
    markers[i].style.background = '';
  }

  indexValue++;
  if(indexValue > slides.length) {
    indexValue = 1;
  }

  if(indexValue > markers.length) {
    indexValue = 1;
  }

  slides[indexValue - 1].style.opacity = '1';
  slides[indexValue - 1].style.transform = 'translateX(0)';
  markers[indexValue - 1].style.background = 'var(--accent-color)';
}

var interval = setInterval(slideShow, 4000);
slideShow();


slides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    pauseSlides();
  });
});

slides.forEach(slide => {
  slide.addEventListener('mouseleave', () => {
    resumeSlides();
  });
});

function pauseSlides() {
    clearInterval(interval);
    document.querySelectorAll('.pause-indicator').forEach(el => {
      el.style.opacity = '1';
    });
}
function resumeSlides() {
    interval = setInterval(slideShow, 4000);
    document.querySelectorAll('.pause-indicator').forEach(el => {
      el.style.opacity = '0';
    });
}


// image zoom on hover 
function zoom(e){
  var zoom = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoom.offsetWidth*100
  y = offsetY/zoom.offsetHeight*100
  zoom.style.backgroundPosition = x + '% ' + y + '%';
}


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);