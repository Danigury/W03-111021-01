import Personaje from "./Personaje";

class Asesor extends Personaje {
  asesorado;

  constructor(nombre, familia, edad, estado, serie, asesorado) {
    super(nombre, familia, edad, estado, serie);
    this.asesorado = this.asesorado;
  }

  comunicar() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }

  morir() {
    estado = "Muerto";
  }
}

export default Asesor;
