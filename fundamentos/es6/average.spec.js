const average = require('./average');

describe('Implemente a função average',() => {
  it('A funçao average deve retornar a média de seus valores ao receber um array de  números',() => {
    expect(average([2,4,6])).toEqual(4);
    expect(average([0,0,0,0])).toEqual(0);
    expect(average([-2,-4,-6])).toEqual(-4);
    expect(average([-2,-4,15])).toEqual(3);
  })
  it('A função average deve retornar undefined ao receber um array  que contém valores não numéricos',() => {
    expect(average([2,'4',6])).toBeUndefined();
    expect(average(['cinco',4,6])).toBeUndefined();
    expect(average(['sete','quatro','onze'])).toBeUndefined();
  })
  it('A função average deve retornar undefined ao receber um array vazio', ()=> {
    expect(average([])).toBeUndefined();
    expect(average([''])).toBeUndefined();
  })
})
