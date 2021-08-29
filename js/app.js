
// Get the window cointainer
const modal = document.getElementById("floting_window_cointainer");
//for rebuilt full card
let fullArray;



const getCountrys = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

getCountrys();

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

                 `;
    countryCountainer.appendChild(div);
  }

  // console.log(listClass)
};


const deteils = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};

const showDetails = (data) => {
  const detailsCountainer = document.getElementById("country-details-flot");
  //remove old continer html and it's content
  detailsCountainer.innerHTML = '';

  const div = document.createElement("div");
  //rewrite new content
  div.innerHTML = `
          <span class="close" onclick="closeFlotingWindow() ">&times;</span>
          <div class="">
            <img src="${data.flag}" class="extra-image">
            <h1>${data.name}</h1>

          </div>
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
        `;
  detailsCountainer.appendChild(div);
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the floting window
const closeFlotingWindow = () => {
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//search funtion
function myFunction() {
  
 var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
 
  const countryTitle = document.querySelectorAll('.card-title');
  const countryDiv = document.querySelectorAll('.countrys');
  
  //  var h1 =document.getElementsByTagName("h1");
  // console.log(countryTitle[0].childNodes[0].textContent)



  for (var i = 0; i < fullArray.length; i++) {
    // console.log(countryTitle[i].childNodes[0].textContent)
   var txtValue = countryTitle[i].childNodes[0].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      countryDiv[i].style.display = "";
    } else {
      countryDiv[i].style.display = "none";
    }

  }


  // for (i = 0; i < li.length; i++) {
  //   a = li[i].getElementsByTagName("a")[0];
  //   txtValue = a.textContent || a.innerText;
  //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //     li[i].style.display = "";
  //   } else {
  //     li[i].style.display = "none";
  //   }
  // }
}