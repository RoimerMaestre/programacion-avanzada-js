
export const obtenerAnimales = async () => {
    try {
      const response = await fetch('assets/js/animales.json');
      const data = await response.json();
      
      return data.animales;
    } catch (error) {
      console.error("Error fetching animal data:", error);
    }
  };
  