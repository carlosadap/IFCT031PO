let sendBtn = document.querySelector("#sendBtn")


function setValues() {
  // let name = document.querySelector("#name").value;
  // let apellidos = document.querySelector("#apellidos").value;
  // let nif = document.querySelector("#nif").value;
  // let email = document.querySelector("#email").value;
  const data = new Object() 
  data.name = document.querySelector("#name").value;
  data.apellidos = document.querySelector("#apellidos").value;
  data.nif = document.querySelector("#nif").value;
  data.email = document.querySelector("#email").value;
  return data;  
}

function checkValues(object) {
  if (object.name) {
    alert(object.name)
  }
}


function nameValidation(name) {
  if (name) {
    alert("Hey there")
  }
}

sendBtn.addEventListener("click", () => {
  const values = setValues();
  checkValues(values);
  printValues();
})