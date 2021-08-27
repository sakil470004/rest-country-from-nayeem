const getCountrys = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
getCountrys();
//for rebuilt full card
let fullArray;

const displayCountry = (data) => {
  const countryCountainer = document.getElementById("full-card-holder");
  // console.log(data)
  fullArray = data;
  for (country of data) {

    const div = document.createElement("div");
    div.classList.add("countrys");
    div.innerHTML = `
         <img src="${country.flag}" onclick="deteils('${country.name}')">

                <h1 class="card-title">${country.name}</h1>
                 `;
    countryCountainer.appendChild(div);
  }
};

const deteils = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};
const showDetails = (data) => {
  const countryCountainer = document.getElementById("full-card-holder");
  // console.log(data)


  //remove old card
  var childNodes = document.getElementById("full-card-holder").childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    var childNode = childNodes[i];

    childNode.parentNode.removeChild(childNode);

  };


  console.log(fullArray);

  for (country of fullArray) {
    const div = document.createElement("div");
    div.classList.add("countrys");
    if (data.name === country.name) {

      div.innerHTML = `
   
  <img src="${country.flag}" onclick="deteils('${country.name}') "  class="extra-width">
  <h1 class="card-title">${country.name}</h1>    
  <div class="img-inline">
 
              <div>
                
                <p>Capital: ${data.capital}</p>
                <p>Alpha2 Code : ${data.alpha2Code}</p>
                <p>Alpha3 Code : ${data.alpha3Code}</p>
                <p>Area: ${data.area} </p>
                <p>Borders: ${data.borders}</p>
                <p>Languages: ${data.languages[0].name}</p>
                <p>Population: ${data.population}</p>
                <p>Region: ${data.region}</p>
                <p>Subregion: ${data.subregion}</p>
                <p>Top Level Domain: ${data.topLevelDomain}</p>
              </div>
                <div class="mobile-extra">
                  <img src="${data.flag}" class="extra-image" >
                  <h1 class="card-title">${country.name}</h1>

                </div>
           </div>
                `;

    } else {
      div.innerHTML = `
      <img src="${country.flag}" onclick="deteils('${country.name}')">

             <h1 class="card-title">${country.name}</h1>
              `;
    }
    countryCountainer.appendChild(div);
  }
};
