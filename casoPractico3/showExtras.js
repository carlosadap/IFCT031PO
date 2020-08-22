function showExtrasCoche() {
  const matchesCoches = document.querySelectorAll(".hiddenCoche");
  matchesCoches.forEach((match) => {match.style.display = "list-item"});
  const matchesMotos = document.querySelectorAll(".hiddenMoto");
  matchesMotos.forEach((match) => {match.style.display = "none"});
}

function showExtrasMoto() {
  const matchesCoches = document.querySelectorAll(".hiddenCoche");
  matchesCoches.forEach((match) => {match.style.display = "none"});
  const matchesMotos = document.querySelectorAll(".hiddenMoto");
  matchesMotos.forEach((match) => {match.style.display = "list-item"});
}