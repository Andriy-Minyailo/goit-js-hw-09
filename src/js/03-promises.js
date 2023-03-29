import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener("submit", oncreatePromise);


function oncreatePromise(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
