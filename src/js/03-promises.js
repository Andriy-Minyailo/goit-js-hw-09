import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener("submit", oncreatePromise);


function oncreatePromise(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  if (!(delay.value >= 0 && step.value >= 0 && amount.value > 0)) {
    Notify.warning('Please, enter valid data!')
    return;
  }
  let resultDelay = Number(delay.value);
  let position = 1;
  setTimeout(() => {
    createPromise(position, resultDelay).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    const idInteval = setInterval(() => {
          if (position === Number(amount.value)) { 
          clearInterval(idInteval);
          return;
      }
      resultDelay += Number(step.value);
      position += 1;
        createPromise(position, resultDelay).then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
          .catch(({ position, delay }) => {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          })
       }, step.value); 
    }, delay.value)
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
  } else {
      reject({ position, delay });
  } 
  })
};


