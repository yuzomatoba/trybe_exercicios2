const rightAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C' ];
const studentAnswer = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparingAnswer = () => {
  if(rightAnswer === studentAnswer) {
    return 1;
  } if(studentAnswer === 'N.A') {
    return 0;
  }
    return -0.5;
};

const countingPoints = (rightAnswer, studentAnswer, action) => {
  let counter = 0;
  for(let index = 0;  index < rightAnswer.length; index+=1){
    const actionReturn = action(rightAnswer[index], studentAnswer[index]);
    counter+= actionReturn;
  }
  return `Resultado do teste: ${counter} pontos`;
};

console.log(countingPoints(rightAnswer,studentAnswer, comparingAnswer));