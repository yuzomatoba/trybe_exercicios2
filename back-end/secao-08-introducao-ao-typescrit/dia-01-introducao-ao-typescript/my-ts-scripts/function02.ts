const emailInput = 'email@email.com';

const validateEmailFormat = (param: string) => {
  var re = /\S+@\S+\.\S+/;

  return re.test(param);
};

console.log(validateEmailFormat(emailInput));