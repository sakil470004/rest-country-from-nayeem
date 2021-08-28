const getCountrys = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
getCountrys();
//for rebuilt full card
let fullArray;
let listClass;
const displayCountry = (data) => {
  const countryCountainer = document.getElementById("full-card-holder");
  // console.log(data)
  fullArray = data;
  for (country of data) {

    const div = document.createElement("div");
    div.classList.add("countrys");
    div.innerHTML = `
 <img src="${country.flag}" onclick="deteils('${country.name}') " class="extra-width">
<h1 class="card-title">${country.name}</h1>

<div class="img-inline img-inline-hide">
  <div>
    <p>Capital: ${country.capital}</p>
    <p>Alpha2 Code : ${country.alpha2Code}</p>
    <p>Alpha3 Code : ${country.alpha3Code}</p>
    <p>Area: ${country.area} </p>
    <p>Borders: ${country.borders}</p>
    <p>Languages: ${country.languages[0].name}</p>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Subregion: ${country.subregion}</p>
    <p>Top Level Domain: ${country.topLevelDomain}</p>
  </div>
  <div class="mobile-extra">
    <img src="${country.flag}" class="extra-image">
    <h1 class="card-title">${country.name}</h1>

  </div>

</div>
                 `;
    countryCountainer.appendChild(div);
  }
  listClass  = document.querySelectorAll('.img-inline-hide');
// console.log(listClass)
};

const deteils = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};

const showDetails = (data) => {
  const countryCountainer = document.getElementsByClassName("full-card-holder");
  // console.log(data)
  // console.log(listClass);
  listClass.forEach((column, index) => {
    
    if (data.name === fullArray[index].name) {
      column.classList.remove('img-inline-hide');
      column.classList.add('img-inline');
      
    } else {
      column.classList.add('img-inline-hide');
      column.classList.remove('img-inline');
    }
  });

};
