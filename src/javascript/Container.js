/*
 * Implemente uma função que receba o nome de um usuário e devolva um cumprimento para esse usuário
 *
 * EXEMPLO:
 * Se o nome do usuário é Bill Gates, o cumprimento deve ser "Olá, Bill Gates! Bem-vindo ao Dockwise Technologies".
 * Se o nome do usuário é Darth Vader, o cumprimento deve ser "Olá, Darth Vader! Bem-vindo ao Dockwise Technologies".
 */
function greetUser() {}

/**
 * Implemente uma função que recebe o valor de uma compra e a quantidade de itens comprados,
 * e retorne o valor do desconto de acordo com a quantidade de itens.
 *
 * A TABELA DE DESCONTO É:
 *   - 1 item: 0 de desconto;
 *   - 2 itens: 3% de desconto;
 *   - 3 itens: 7% de desconto;
 *   - 4 itens: 12% de desconto;
 *   - 5 itens ou mais: 20% de desconto.
 */
function calculateDiscount() {}

/**
 * Implemente uma função que recebe um array com notas de um aluno e uma função de callback,
 * e devolva o resultado da média pelo callback.
 */
function calculateAvarage() {}

/**
 * Implemente uma função que receba uma data no formato DD/MM/YYYY,
 * extraia o dia, mês e ano, e retorne um array com:
 *   - o ANO na posição 1.
 *   - o MÊS na posição 2.
 *   - o DIA na posição 3.
 */
function dataConverter() {}

/**
 * Implemente uma função que calcule uma função do segundo grau (ax² + bx + c = 0).
 * A função deve retornar um array com x1 na primeira posição e x2 na segunda posição.
 */
function bhaskaramForm() {}

/**
 * O financeiro do Dockwise disponibilizou as movimentações mensais numa lista de registros.
 * Cada registro tem duas posições: uma string com o nome do mês e o total de containers movimentadaos.
 *
 * Implemente uma função que receba uma lista de faturamentos (exemplo abaixo) e retorne
 * o total de movimentações por ano.
 *
 * EXEMPLO DA ESTRUTURA:
 * [
 *    { "container": "EADG9987216", "handling: 4" },
 *    { "container": "SIHJ2938476", "handling: 2" },
 *    { "container": "APIO9872635", "handling: 1" },
 *    { "container": "APOK1092893", "handling: 6" },
 *    { "container": "IKOA1829839", "handling: 1" },
 * ]
 * RESULTADO ESPERADO: 14 (4 + 2 + 1 + 6 + 1);
 */
function countContainerHandlingByYear() {}

/**
 * Considerando a sequência de Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...,
 * implemente uma função que receba a enésima posição da sequência, e devolva o algarismo correspondente.
 *
 * EXEMPLO:
 *   - posição é 7: retorna o elemento 13.
 *   - posição é 8: retorna o elemento 21.
 */
function fibonacciSequence() {}

/**
 * Implemente uma função que irá retornar um objeto com os dados de um container
 *
 * Exemplo
 * { container: "", type: 20 ou 40, client: ""}
 */
function createContainer() {}

/**
 * Implemente uma função onde você irá entrar com um objeto de um container, tipo da movimentação, data inicial e data final
 *
 * Exemplo
 * { container: { container: "", type: "", client: "" }, handling: "", initialTime: "", finalTime: "" }
 */
function createContainerHandling() {}


module.exports = {
  greetUser,
  calculateDiscount,
  calculateAvarage,
  dataConverter,
  bhaskaramForm,
  countContainerHandlingByYear,
  fibonacciSequence,
  createContainer,
  createContainerHandling,
};
