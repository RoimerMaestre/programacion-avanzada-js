// assets/js/Oso.js
import Animal from './Animal.js';

class Oso extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export default Oso;
