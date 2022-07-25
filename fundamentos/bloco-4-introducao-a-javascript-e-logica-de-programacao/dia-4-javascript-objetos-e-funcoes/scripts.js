let info = {
personagem: 'Margarida',
origem: 'Pato Donald',
nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
recorrente: 'Sim'
}

for(key in info){
console.log(key);
}

console.log('Bem-vinda',info.personagem);

for(key in info) {
    console.log(info[key]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas Ambos recorrentes',
    recorrente: 'Ambos recorrentes'
}
for(let key in info) {
    for(let key in info2) {
    console.log(info[key] , 'e', info2[key]);}
}