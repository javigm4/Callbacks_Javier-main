export function sumaArrays(array1, array2, callback) {
  return callback(array1, array2);
}

export const callbackSuma = (arr1, arr2) => {
  const suma1 = arr1.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  const suma2 = arr2.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  return suma1 + suma2;
};

//------------------------------------------------------------------------

export function concatenacionArray(arrayC, callback) {
  return callback(arrayC);
}

export function callbackConc(arrayC) {
  let texto = "My task list:";
  for (let i = 0; i < arrayC.length; i++) {
    texto += " " + arrayC[i];
  }
  return texto;
}

//------------------------------------------------------------------------
export function dobleArray(arrayD, callback) {
    setTimeout(() => {
      callback(arrayD.map(x => x * 2));  
    }, 6000);
}


export function callbackDobleDelay(arrayD){
   return arrayD;  
}

//------------------------------------------------------------------------

export function sumaArraysDelay(array1, array2, callback) {
  setTimeout(() => {
    return callback(array1, array2);
  }, 3000);
}

export function callbackSumaDelay(arr1, arr2) {
  const suma1 = arr1.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  const suma2 = arr2.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  return suma1 + suma2;
};

//------------------------------------------------------------------------

export function concatenacionArrayDelay(arrayC, callback) {
  setTimeout(() => {
    return callback(arrayC);
  }, 2000);
}

export function callbackConcDelay(arrayC) {
  let texto = "My task list:";
  for (let i = 0; i < arrayC.length; i++) {
    texto += " " + arrayC[i];
  }
  return texto;
}