class Vehiculo {
  constructor(tipo, modelo, marca, color, ruedas) {
    this.tipo = tipo;
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
    this.ruedas = ruedas;
  }
}
;

class Coche extends Vehiculo {
  constructor(tipo, modelo, marca, color, ruedas, traccion, extras) {
    super(tipo, modelo, marca, color, ruedas);

    this.traccion = traccion;
    this.extras = extras;
  }
}

class Moto extends Vehiculo {
  constructor(tipo, modelo, marca, color, ruedas, velocidad) {
    super(tipo, modelo, marca, color, ruedas);

    this.velocidad = velocidad;
  }
}

