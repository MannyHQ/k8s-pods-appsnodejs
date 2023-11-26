// Búsqueda Binaria
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid; // Elemento encontrado, retorna el índice
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1; // Elemento no encontrado
  }
  
  // Método de la Burbuja
  function bubbleSort(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambiar elementos si están en el orden incorrecto
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  // Uso de los algoritmos
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const targetElement = 5;
  
  console.log(`Resultado de la búsqueda binaria: ${binarySearch(sortedArray, targetElement)}`);
  
  const unsortedArray = [5, 3, 8, 1, 2, 7, 4, 10, 6, 9];
  bubbleSort(unsortedArray);
  console.log(`Resultado de la búsqueda por método de la burbuja: ${unsortedArray}`);
  