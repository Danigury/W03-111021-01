import Personaje from "./Personaje";

class Luchador extends Personaje {
  armas = "Espada";
  destreza = 8;

  constructor(nombre, familia, edad, estado, serie, armas, destreza) {
    super(nombre, familia, edad, estado, serie);
    this.armas = armas;
    this.destreza = destreza;
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }

  morir() {
    estado = "Muerto";
  }
}

export default Luchador;
