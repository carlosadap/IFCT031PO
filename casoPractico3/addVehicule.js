function addVehicule() {
  const vehicule = document.querySelector('input[name="tipo"]:checked').value;
  const tableSelector = vehicule === "Coche" ? "#tableCoches" : "#tableMotos";
  const tableRef = document.querySelector(tableSelector).querySelector("tbody");

  const newRow = tableRef.insertRow();
  const newCell = newRow.insertCell;
  
  const newContent = document.createTextNode('New row'); 

  
  newPar.appendChild(newContent);
  let currentPar = document.querySelector("#display");
  document.body.insertBefore(newPar, currentPar)

  // let where = document.querySelector("#display");
  // where.insertAdjacentHTML('afterend', content); 
}