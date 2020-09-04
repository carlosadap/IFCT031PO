const name = document.querySelector("#name").value;
const apellidos = document.querySelector("#apellidos").value;
const nif = document.querySelector("#nif").value;
const email = document.querySelector("#email").value;
const content = document.querySelector("#content");
const form = document.querySelector("form")

function showOnScreen() {
  content.textContent = `Su nombre es ${name}, sus apellidos son ${apellidos}, su NIF es ${nif} y su email es ${email}`
  alert(`Su nombre es ${name}, sus apellidos son ${apellidos}, su NIF es ${nif} y su email es ${email}`)
}

function handleForm(event) { 
  event.preventDefault(); 
  showOnScreen();
} 

form.addEventListener('submit', handleForm);