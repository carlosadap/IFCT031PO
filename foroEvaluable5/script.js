const sendBtn = document.querySelector("#sendBtn");
const form = document.querySelector("form");


function setValues() {
  const data = new Object() 
  data.name = document.querySelector("#name").value;
  data.apellidos = document.querySelector("#apellidos").value;
  data.nif = document.querySelector("#nif").value;
  data.email = document.querySelector("#email").value;
  return data;  
}

function printValues(object) {
  alert(object.name + object.apellidos + object.nif + object.email)
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const values = setValues()
  printValues(values)
})