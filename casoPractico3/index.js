function Vehiculo(tipo, modelo, marca, color, ruedas) {
  this.tipo = tipo;
  this.modelo = modelo;
  this.marca = marca;
  this.color = color;
  this.ruedas = ruedas;
};

function Coche(tipo, modelo, marca, color, ruedas, traccion, extras) {
  Vehiculo.call(this, tipo, modelo, marca, color, ruedas);
  this.traccion = traccion;
  this.extras = extras;
}

function Moto(tipo, modelo, marca, color, ruedas, velocidad) {
  Vehiculo.call(this, tipo, modelo, marca, color, ruedas);
  this.velocidad = velocidad;
}

