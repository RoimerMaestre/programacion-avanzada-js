
export const obtenerAnimales = async () => {
    try {
      const response = await fetch('assets/js/animales.json');
      if (!response.ok) {
        // Si no es correcta, lanzamos un error con un mensaje específico, es importante destacar que segun lo estudiado, trow new error es muy utilizado en los manejos de errores, y tengo entendido que es una buena practica
        throw new Error('Hay un error en la llamada de la api ');
      }
      const data = await response.json();
      
      return data.animales;
    } catch (error) {
      console.error("Error fetching animal data:", error);
    }
  };
  