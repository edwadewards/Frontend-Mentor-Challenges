let indexValue = 0;
function slideShow() {
  // setTimeout(slideShow, 9000);
  let x;
  const slides = document.querySelectorAll('.slide');
  for(x = 0; x < slides.length; x++) {
    slides[x].style.opacity = '0';
    slides[x].style.transform = 'translateX(240px)';
  }
  indexValue++;
  if(indexValue > slides.length) {
    indexValue = 1;
  }
    slides[indexValue - 1].style.opacity = '1';
    slides[indexValue - 1].style.transform = 'translateX(0)';  
}
var interval = setInterval(slideShow, 4000);
slideShow();

const slides = document.querySelectorAll('.slide');
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