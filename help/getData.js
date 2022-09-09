export const getData = async(inputValue) => {
  try{
    const apiKey = 'ece2f3ff5f6f4bcdb36d808f171d6852';
    const inputVal = inputValue;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const {main, name, sys, weather} = await response.json();
    const icon = weather[0]['icon']
    const itemsClimate = {
      main,
      name,
      sys,
      weather
    }
    return itemsClimate;
  }catch(err){
    console.log('No hay ubicación')
  }
}