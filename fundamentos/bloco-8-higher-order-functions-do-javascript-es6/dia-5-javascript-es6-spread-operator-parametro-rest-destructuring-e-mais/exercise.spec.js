const sum = require('./exercise1');

describe('Criar uma função que',() => {
  it('faça a soma dos números', ()=> {
    expect(1,2,3).toEqual(6);
    expect(typeof sum).toBe('function');
  })
})