const vqv = require('./vqv');

describe('Implemente a função vqv',() => {
  it('vqv deve ser uma função', () => {
    expect(typeof vqv).toBe('function');
  });
  it('A função vqv deve retornar dados do  tipo string',() => {
    expect(typeof vqv('Tunico', 30)).toBe('string');
  });
  it('A função vqv deve retornar a frase esperada quando passados parâmetros de nome e idade',()=>{
    expect(vqv('Tunico',30)).toBe(
      `Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!`,
    );
    expect(vqv('Tunico',20)).toBe(
      `Oi, meu nome é Tunico!
      Tenho 20 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!`,
    );
    expect(vqv('Yuzo',22)).toBe(
      `Oi, meu nome é Yuzo!
      Tenho 22 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!`,
    );
  });
  it('A função vqv deve retornar undefined quando chamada sem parâmetro', () => {
    expect(vqv()).toBeUndefined();
  });
});