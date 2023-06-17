const {
  greetUser,
  calculateDiscount,
  calculateAvarage,
  dataConverter,
  bhaskaramForm,
  countContainerHandlingByYear,
  fibonacciSequence,
  createContainer,
  createContainerHandling,
} = require("./../src/javascript/Container");

describe("Dockwise Technologies - Testes Unitários", () => {
  test("Deve cumprimentar o usuário", () => {
    expect(greetUser("Bill Gates")).toBe(
      "Olá, Bill Gates! Bem-vindo ao Dockwise Technologies"
    );
    expect(greetUser("Capitão América")).toBe(
      "Olá, Capitão América! Bem-vindo ao Dockwise Technologies"
    );
    expect(greetUser("Hélio Rangel")).toBe(
      "Olá, Hélio Rangel! Bem-vindo ao Dockwise Technologies"
    );
  });

  test("Deve calcular o desconto", () => {
    expect(calculateDiscount(130, 1)).toBe(0);
    expect(calculateDiscount(130, 1)).toBe(0);
    expect(calculateDiscount(120, 2)).toBeCloseTo(3.6);
    expect(calculateDiscount(80, 3)).toBeCloseTo(5.6);
    expect(calculateDiscount(150, 4)).toBeCloseTo(18.0);
    expect(calculateDiscount(145, 5)).toBeCloseTo(29.0);
  });

  test("Deve calcular média", () => {
    expect(calculateAvarage([4, 6, 8, 5])).toBeCloseTo(5.75);
    expect(calculateAvarage([5, 6, 5, 9])).toBeCloseTo(6.25);
    expect(calculateAvarage([9, 9, 9, 9])).toBeCloseTo(9.0);
  });

  test("Deve retornar a data no formato AAAA/MM/DD", () => {
    expect(dataConverter("01/02/2001")).toBe("2001/02/01");
    expect(dataConverter("10/09/2023")).toBe("2023/09/10");
  });

  test("Deve calcular uma equação de segundo grau", () => {
    const raizes1 = bhaskaramForm(4, 2, -1);
    expect(raizes1[0]).toBeCloseTo(0.309);
    expect(raizes1[1]).toBeCloseTo(-0.809);

    const raizes2 = bhaskaramForm(7, 15, 2);
    expect(raizes2[0]).toBeCloseTo(-0.14);
    expect(raizes2[1]).toBeCloseTo(-2);
  });
  test("Deve retornar o total de containers movimentados em um ano", () => {
    const cont = [
      { container: "EADG9987216", handling: 2 },
      { container: "SIHJ2938476", handling: 7 },
      { container: "APIO9872635", handling: 9 },
      { container: "APOK1092893", handling: 1 },
      { container: "IKOA1829839", handling: 1 },
    ];
    expect(countContainerHandlingByYear(cont)).toBe(20);
  });
  test("Deve retornar o termo da sequência fibonacci", () => {
    expect(fibonacciSequence(0)).toBe(1);
    expect(fibonacciSequence(1)).toBe(1);
    expect(fibonacciSequence(2)).toBe(3);
    expect(fibonacciSequence(7)).toBe(13);
  });
  test("Deve retornar um objeto de um container", () => {
    const container = {
      container: "ASDA1234567",
      type: "Exportação",
      client: "Maersk",
    };
    expect(createContainer(container)).toEqual({
      container: "ASDA1234567",
      type: "Exportação",
      client: "Maersk",
    });
  });
  test("Deve retornar um objeto de uma movimentação de um container", () => {
    const container = {
      container: "ASDA1234567",
      type: "Exportação",
      client: "Maersk",
    };
    expect(createContainerHandling(container, "Gate Out", "17/07/2022", "18/07/2022")).toEqual({
      container: {
        container: "ASDA1234567",
        type: "Exportação",
        client: "Maersk",
      },
      handling: "Gate Out",
      initialTime: "17/07/2022",
      finalTime: "18/07/2022",
    });
  });
});
