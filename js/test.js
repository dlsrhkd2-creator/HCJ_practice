const name = document.getElementById('userName').value;
const email = document.getElementById('userEmail').value;
const age = document.getElementById('userAge').value;
const city = document.getElementById('userCity').value;
const isAgreed = document.getElementById('agree').checked;

const genderRadios = document.getElementById('gender');
let gender = "";
for( let radio of genderRadios) {
  if(radio.checked){
    gender = radio.value;
    break;
  }
}

if(!name || !email){

}

if(!isAgreed) {

}

const resultDiv = document.getElementById('result');