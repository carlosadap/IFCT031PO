const sendBtn = document.querySelector("#sendBtn");
const form = document.querySelector("form");
const content = document.querySelector("#content")


function setValues() {
  const data = new Object() 
  data.name = document.querySelector("#name").value;
  data.apellidos = document.querySelector("#apellidos").value;
  data.nif = document.querySelector("#nif").value;
  data.email = document.querySelector("#email").value;
  return data;  
}

function printValues(object) {
  content.textContent = `Su es ${object.name}, su apellido es ${object.apellidos}, su nif es ${object.nif} y su email es ${object.email}`
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const values = setValues()
  printValues(values)
})