// assets/js/Lobo.js
import Animal from './Animal.js';

class Lobo extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export default Lobo;
