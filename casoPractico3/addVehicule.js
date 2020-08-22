function addVehicule() {
  const vehicule = document.querySelector('input[name="tipo"]:checked').value;
  const tableID = vehicule === "Coche" ? "#tableCoches" : "#tableMotos";
  const tableRef = document.querySelector(tableID).querySelector("tbody");

 

  tableRef.insertRow(-1); // add new tr

  const rowRef = document.querySelector(tableID).querySelector("tbody").querySelector("tr:last-child"); 

  if (vehicule === "Coche") {
    const cocheArr = [
      document.querySelector('input[name="modelo"]').value,
      document.querySelector('input[name="marca"]').value,
      document.querySelector('input[name="color"]').value,
      document.querySelector('input[name="nRuedas"]').value,
      document.querySelector('input[name="traccion"]').value,
      document.querySelector('textarea[name="extras"]').value
    ]  
    for (let i = 0; i < 6; i++) {
      rowRef.insertCell(-1).appendChild(document.createTextNode(cocheArr[i]));
    }
  } else {
    const motoArr = [
      document.querySelector('input[name="modelo"]').value,
      document.querySelector('input[name="marca"]').value,
      document.querySelector('input[name="color"]').value,
      document.querySelector('input[name="nRuedas"]').value,
      document.querySelector('input[name="velocidad"]').value
    ] 
    for (let i = 0; i < 5; i++) {
      rowRef.insertCell(-1).appendChild(document.createTextNode(motoArr[i]));
    }
  }
}