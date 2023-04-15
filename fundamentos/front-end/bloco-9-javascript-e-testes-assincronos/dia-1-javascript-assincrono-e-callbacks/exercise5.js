const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const sendMarsTemperature = (onSucess) => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => {
    onSucess(currentTemperature), messageDelay()
  });
}

sendMarsTemperature(temperatureInFahrenheit); 
sendMarsTemperature(greet); 