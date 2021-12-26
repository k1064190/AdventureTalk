const body = document.body;

const dirname = '../photo/bg/';
const file_n = 5;

const random_number = Math.ceil((Math.random()*file_n));

if(body.classList.contains('bg-img')) {
  body.style.backgroundImage = "url(../photo/bg/"+random_number+".jpg)";
  console.log(body);
}