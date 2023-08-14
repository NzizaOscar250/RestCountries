const container=document.querySelector(".card-container");
const form=document.querySelector(".search-bar form");
form.addEventListener('submit',function(e){
e.preventDefault()
const input=document.querySelector(".search-bar form input").value;

container.innerHTML="";
SearchCountries(input)

}
)

function toggleDropdown(imageElement) {
    const card = imageElement.closest('.card');
    const dropdownContent = card.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}



async function fetchCountries(callBack) {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
 
  callBack(data);
}

fetchCountries(displayCountries)

async function SearchCountries(searchTerm) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
    const data = await response.json();
    displayCountries(data);
  }


function displayCountries(countries) {
  
  countries.forEach((data,index)=>{

	container.innerHTML +=`
	  <div class="card">
		<h2>${data.name.common}</h2>
            <img src="${data.flags.png}" alt="Country Flag" class="flag-image" onclick="toggleDropdown(this)">
            <div class="dropdown-content">
                <h3>${data.name.common}</h3>
               	<h4><b>Continent:</b> ${data.region}</h4>
		<h4><b>Population: </b>${data.population.toLocaleString()}</h4>
		<h4><b>Area: </b>${data.area.toLocaleString()}</h4>
		<h4><b>City: </b>${data.capital[0]}</h4>
<h4><b>Language: </b>${Object.values(data.languages).join(', ')}</h4>
		<p>COAT OF ARM</p>
		<img src="${data.coatOfArms.png}" width="60px"/>
			


            </div>
        </div>
			`;
      
  })

}