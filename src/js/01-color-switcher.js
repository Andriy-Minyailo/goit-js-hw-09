const refs =  {
    startBotton: document.querySelector('[data-start]'),
    stopBotton: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}
let timeId = 0;

refs.stopBotton.setAttribute("disabled", "");

refs.startBotton.addEventListener("click", onStartColorChange); 
refs.stopBotton.addEventListener('click', onStopColorChange);

function onStartColorChange(event) {
    refs.body.style.background = getRandomHexColor();
    timeId = setInterval(() => refs.body.style.background = getRandomHexColor(), 1000);
    refs.startBotton.setAttribute("disabled", "");
    refs.stopBotton.removeAttribute("disabled");

}

function onStopColorChange(event) {
    refs.startBotton.removeAttribute("disabled");
    refs.stopBotton.setAttribute("disabled", "");
    clearInterval(timeId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
