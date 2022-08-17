
const average = (array) => {
  let sum = 0;
  let aveRage = 0;
  if(array.length === 0) {
    return undefined;
  }
    for(let index = 0; index < array.length; index+=1){
      sum += array[index]; 
      aveRage = sum / array.length;
      if((typeof array[index] !== 'number')){
        return undefined;
      }
  }

const answer = aveRage.toFixed(0);
return Number(answer);
};

module.exports = average;