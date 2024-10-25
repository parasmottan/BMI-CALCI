const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const rank = document.querySelector('.rank');
const body = document.querySelector(".main")
  const error = document.querySelector('.errormsg')
  const img = document.querySelector("video")
  const i = document.querySelector("i");




  if (height === '' || height < 0 || isNaN(height)) {
    error.innerHTML = `<h1>Error Reload The Page !! Please give a valid height </h1> ${height}`;
    body.style.opacity = 0;
img.style.display = 'block'

  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    var bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

if (bmi <= 18.6) {

  rank.style.color = 'blue';
rank.innerHTML = 'Underweight'
}

else if (bmi <= 24.9) {

  rank.style.color = 'green';
rank.innerHTML = 'Normal'
  }
  
  else if (bmi <= 30 || bmi >= 24.9) {

    rank.style.color = 'red';
  rank.innerHTML = 'Overweight'
  }

  if (bmi <= 10 || bmi >= 5) {
   
  i.style.transform = `translateX(${Math.round(bmi * 2) }%)`
  }
  




});