const sum = require('./sum');

describe('Testes de Soma',() => {
  it('Teste se o retorno de sum(4,5) é 9',() => {
  expect(sum(4,5)).toBe(9);
  expect(sum(0,0)).toBe(0);
  })
});

  it('Deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum (4, '5')).toThrowError('parameters must be numbers');
  })