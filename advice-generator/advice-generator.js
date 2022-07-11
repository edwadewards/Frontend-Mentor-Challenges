// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

function getAdvice(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.adviceslip.com/advice', true);

  xhr.onload = function() {
    if(this.status == 200) {
      const advice = JSON.parse(this.responseText);
      document.querySelector('.advice').innerHTML = JSON.stringify(advice.slip.advice);
      document.querySelector('.counter').innerHTML = `#${JSON.stringify(advice.slip.id)}`;
    }
  }
  xhr.onerror = function() {
    document.querySelector('.advice').innerHTML = "Sorry, advice generator is not advicing at the moment.";
  }

  xhr.send()
}

getAdvice();

document.querySelector('.btn').addEventListener('click', getAdvice);