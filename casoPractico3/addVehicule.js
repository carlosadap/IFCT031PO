function addVehicule() {
  let newPar = document.createElement("p");
  let content = document.querySelector('input[name="tipo"]:checked').value;
  let newContent = document.createTextNode(content);
  newPar.appendChild(newContent);
  let currentPar = document.querySelector("#display");
  document.body.insertBefore(newPar, currentPar)

  // let where = document.querySelector("#display");
  // where.insertAdjacentHTML('afterend', content); 
}