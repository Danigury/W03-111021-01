class Personaje {
  nombre;
  familia;
  edad;
  estado = "Vivo";
  serie = "Esta serie es una turra";

  constructor(nombre, familia, edad, estado, serie) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
    this.serie = serie;
  }

  comunicar() {
    return "string";
  }

  morir() {
    estado = "Muerto";
  }
}

export default Personaje;
