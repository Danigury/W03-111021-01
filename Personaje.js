class Personaje {
  nombre;
  familia;
  edad;
  ocupacion;
  estado = "Vivo";
  serie = "Esta serie es una turra";

  constructor(nombre, familia, edad, ocupacion, estado, serie) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.estado = estado;
    this.serie = serie;
  }

  comunicar() {
    return "string";
  }
}

export default Personaje;
