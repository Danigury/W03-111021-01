import Personaje from "./Personaje";
import Luchador from "./Luchador";

class Escudero extends Personaje {
  siervo;
  pelotismo = 9;

  constructor(nombre, familia, edad, estado, serie, siervo, pelotismo) {
    super(nombre, familia, edad, estado, serie);
    this.siervo = siervo;
    this.pelotismo = pelotismo;
  }

  comunicar() {
    return "Soy un loser";
  }

  morir() {
    estado = "Muerto";
  }
}

export default Escudero;
