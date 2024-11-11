import * as main from "./main.js";

describe("Función sumaArrays", function () {
  it("should return 23, when adds [1, 2, 3, 4, 5] + [2, 3, 1, 2]", function () {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [2, 3, 1, 2];
    const result = main.sumaArrays(array1, array2, main.callbackSuma);
    expect(result).toBe(23);
  });
});

//------------------------------------------------
describe("Función concatenacion", function () {
  it("should gets My task list: study buy sleep play, when pass [study,buy,sleep,play]", () => {
    let tareas = ["study", "buy", "sleep", "play"];
    const textoResultado = main.concatenacionArray(tareas, main.callbackConc);
    expect(textoResultado).toBe("My task list: study buy sleep play");
  });
});

//------------------------------------------------

describe("funcion dobleArray", function () {
  it("should transform the array in the double", (done) => {
    let array = [1, 2, 3, 4];
    main.dobleArray(array, (resultado) => {
      expect(resultado).toEqual([2, 4, 6, 8]);
      done();
    });
  }, 7000);
});
//------------------------------------------------
describe("Función sumaArraysDelay", function () {
  it("hace lo mismo que sumaArrays pero 3 segundos mas tarde", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [2, 3, 1, 2];
    const result = main.sumaArrays(array1, array2, main.callbackSumaDelay);
    expect(result).toBe(23);
  });
});

//------------------------------------------------
describe("Función concatenacionDelay", function () {
  it("hace lo mismo que concatenacion pero 2 segundos más tarde", () => {
    let tareas = ["study", "buy", "sleep", "play"];
    const textoResultado = main.concatenacionArray(tareas, main.callbackConcDelay);
    expect(textoResultado).toBe("My task list: study buy sleep play");
  });
});
