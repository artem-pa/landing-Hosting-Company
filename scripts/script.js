const prices = [2.99, 4.99, 9.99];
const pricesYearly = [29.99, 49.99, 99.99];
const cardsPrice = document.querySelectorAll('.price .card .price-main .prc');
const cardsPeriod = document.querySelectorAll('.price .card .price-main .period');
const pricesSmall = document.querySelectorAll('.price .card .price-small');
const check = document.querySelector('.price .switch input');
const burger = document.querySelector('.burger');
const scrollUp = document.querySelector('.scroll-up');

const render = () => {
  if (check.checked) {
    for (let i = 0; i < 3; i++) {
      cardsPrice[i].innerText = (prices[i] * 10 + 0.09).toFixed(2);
      cardsPeriod[i].innerText = '/year';
      pricesSmall[i].innerText = `$${(pricesYearly[i] / 12).toFixed(2)} per month`;
    }
  }
  else {
    for (let i = 0; i < 3; i++) {
      cardsPrice[i].innerText = prices[i];
      cardsPeriod[i].innerText = '/month';
      pricesSmall[i].innerText = `$${(prices[i] * 12).toFixed(2)} per year`;
    }
  }
}

for (let i = 0; i < 3; i++) {
  cardsPrice[i].innerText = prices[i];
  pricesSmall[i].innerText = `$${(prices[i] * 12).toFixed(2)} per year`;
}

document.querySelector('.price .switch').addEventListener('click', e => {
  render();
})

document.querySelector('.price .price__switch p').addEventListener('click', () => {
  check.checked = false;
  render();
})
document.querySelectorAll('.price .price__switch p')[1].addEventListener('click', () => {
  check.checked = true;
  render();
})

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  document.querySelector('.bg').classList.toggle('active');
  document.querySelectorAll('.row.menu')[0].classList.toggle('active');
  document.querySelectorAll('.row.menu')[1].classList.toggle('active');
  document.querySelectorAll('.row.menu')[2].classList.toggle('active');
  document.body.classList.toggle('disabled');
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollUp.classList.add('active');
    console.log(window.screenY);
  }
  else scrollUp.classList.remove('active');
})

scrollUp.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"})
})
