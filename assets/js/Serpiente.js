// assets/js/Serpiente.js
import Animal from './Animal.js';

class Serpiente extends Animal {
  constructor(nombre, edad, comentarios, imagen, sonido) {
    super(nombre, edad, comentarios, imagen, sonido);
  }
}

export default Serpiente;
