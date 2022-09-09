import { getData } from './help/getData'; 
import { convert } from './utils/convert';

// const form = document.querySelector('form'); 
const input = document.getElementById('inputCity');
const btnSearch = document.getElementById('search');
const clean = document.getElementById('clean') ;
const mountNode = document.querySelector('.container');

const btnSubmit = async(e)=>{
e.preventDefault();
if(input.value == ''){
  input.placeholder = 'Ingrese ciudad please!'
  input.classList.add("input__err");
  
}else{
  const data = await getData(input.value);
  if(!data){
    alert('No hay ubicación');
    input.value = '';
  }else{
  const {name, sys, main, weather} = data;
  
  const container__card = document.createElement('div');
  container__card.className = 'container__card';
  container__card.style.height = 200;
  container__card.style.width = 200;
  container__card.style.borderRadius = '8px'
  container__card.style.padding = '2rem'
  container__card.style.backgroundColor = '#174661';

  const title = document.createElement('h2');
  const country = document.createElement('p');
  country.className = 'container__card--country';
  const temp = document.createElement('p');
  temp.className = 'container__card--temp';
  const icon = document.createElement('img');
  icon.src = `https://openweathermap.org/img/wn/${
    weather[0].icon
  }@2x.png`
  const description = document.createElement('p');
  description.className = 'container__card--description';
  title.textContent = `${name}`;
  country.textContent = `${sys.country}`;
  temp.textContent = `${convert(main.temp)}°C`;
  icon.textContent = `${weather[0].icon}`;
  description.textContent = `${weather[0].description}`;
  mountNode.appendChild(container__card);
  container__card.append(title,country, temp, icon, description);
  input.value = '';
  input.classList.remove("input__err");
  }
}
}

const updateValue =(e)=>{
  console.log(e.target.value)
}

const restore = (e)=>{
  e.preventDefault();
  const hijo = [...mountNode.childNodes]
  hijo.map(item=>{
    item.remove()
  })
  input.value = '';
  input.classList.remove("input__err");
  return;
}


btnSearch.addEventListener('click',btnSubmit)
clean.addEventListener('click',restore) ;