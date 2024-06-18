// assets/js/Aguila.js
import Animal from './Animal.js';

class Aguila extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export default Aguila;
