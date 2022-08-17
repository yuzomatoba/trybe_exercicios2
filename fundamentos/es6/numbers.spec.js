const numbers = require('./numbers');

describe('Implemente os casos de teste para a função numbers',() => {
 it('A funçao numbers deve retornar true quando o array passado por parâmetro contém somente números', () => {
  expect(numbers([2,3,4])).toBe(true);
  expect(numbers([0,0,0,0,0])).toBe(true);
  expect(numbers([2,'b',3])).toBe(false);
  expect(numbers([5,4,'um',2,3])).toBe(false);
  expect(numbers([-1,2,-6,-8,0])).toBe(true);
  expect(numbers([''])).toBe(false);
  expect(numbers([1, 5, 6, '7',8,9,0])).toBe(false);
 }) 
})