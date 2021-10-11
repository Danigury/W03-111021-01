import Personaje from "./Personaje";

class Rey extends Personaje {
  antiguedad = 25;

  constructor(nombre, familia, edad, estado, serie, antiguedad) {
    super(nombre, familia, edad, estado, serie);
    this.antiguedad = antiguedad;
  }

  comunicar() {
    return "Vais a morir todos";
  }

  morir() {
    estado = "Muerto";
  }
}

export default Rey;
