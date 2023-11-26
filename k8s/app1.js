// Algoritmo de búsqueda Lineal o Secuencial
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Retorna el índice si se encuentra el elemento
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en el array
  }
  
  // Algoritmo de búsqueda por saltos
  function jumpSearch(arr, target) {
    const n = arr.length;
    let step = Math.sqrt(n);
    let prev = 0;
  
    while (arr[Math.min(step, n) - 1] < target) {
      prev = step;
      step += Math.sqrt(n);
      if (prev >= n) {
        return -1;
      }
    }
  
    for (let i = prev; i < Math.min(step, n); i++) {
      if (arr[i] === target) {
        return i; // Retorna el índice si se encuentra el elemento
      }
    }
  
    return -1; // Retorna -1 si el elemento no se encuentra en el array
  }
  
  // Ejemplo de uso
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const targetElement = 6;
  
  console.log(`Resultado de la búsqueda lineal: ${linearSearch(array, targetElement)}`);
  console.log(`Resultado de la búsqueda por saltos: ${jumpSearch(array, targetElement)}`);
  