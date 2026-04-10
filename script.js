import data from "./data.js"; 




function populateCountryCards(searchInput, region, population){

    const container = document.getElementById('country-cards-container');
    container.innerHTML = "";

    let displayCount = 12;
    let countries = [];


    if (countries.length === 0) {
        container.innerHTML = console.log('no countries found');
        
        } else {

            // let loopCounter = displayCount < length.countries ? displayCount : length.countries;
            let loopCounter = Math.min(displayCount, countries.length);

            for(let i=0; i< loopCounter; i++){
                let country = countries[i];
                let card = document.createElement('div');
                card.classList.add ("country-card");

                let countryName = document.createElement('h2');
                countryName.innerHTML = country.name;

                let population = document.createElement('p');
                population.innerHTML = country.population;

                let capital = document.createElement('p');
                capital.innerHTML = country.capital;

                let region = document.createElement('p');
                region.innerHTML = country.region;

                let flag = document.createElement('img');
                flag.innerHTML = country.flag; 
                
                let elements = document.querySelectorAll('card');
               
                card.append(elements);

                container.append(card);
                
        }
    }


//     3.1.   Set a variable loopCounter = displayCount or length of countries array, whichever is lesser

//     3.2.   FOR EACH country in countries from 0 to loopCounter DO

//         3.2.1.   Use document.createElement to create a new <div> element and name it card

//         3.2.2.   Add the class "country-card" to the card <div> to apply CSS later

//         3.2.3.   Use document.createElement to create an element for each piece of information you want to display in the card

//         3.2.4.   Set the inner HTML for the all the elements as per the data in the country object

//         3.2.5.   APPEND all the elements created to the card <div>

//         3.2.6.   APPEND the card to countryCardsContainer

//     3.3.   END FOR EACH

// 4.   END IF
}

//  call the populateCountryCards() function on the DOMContentLoaded event of the Main page.