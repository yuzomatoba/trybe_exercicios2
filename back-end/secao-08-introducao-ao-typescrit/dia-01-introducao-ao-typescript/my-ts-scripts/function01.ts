const numberInput = 7;

const  isItAPrime = (param: number) => {
  for (let i = 2; i < param; i++)

  if (param%1 === 0 ) {
    return false;
  }
  return param > 1;
};

isItAPrime(numberInput)
? console.log(`${numberInput} é primo`)
: console.log(`${numberInput} não é primo`);

