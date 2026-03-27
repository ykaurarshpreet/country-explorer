import "./data" 

const CountryCardsContainer = document.getElementById('country-cards-container');

let displayCount = 0;
let countries = [];
const data = '';

function populateCountryCards(region, population){
    
    countryCardsContainer.innerHTML = "";
//     1.   SET countryCardsContainer's innerHTML to an empty string

    if (length === 0) {
        console.log("error");
    } else {
        let loopCounter = displayCount < length.countries ? displayCount : length.countries;
        for(let i=0; i< loopCounter; i++){
            let card = document.createElement('div');
            card.className = "country-card";
            let elements = document.querySelectorAll('.country-card').innerHTML;
            elements.innerHTML = data;
            
    }
    }

    
// 2.   IF countries length is 0 THEN

//     2.1.   Display a suitable error message

// 3.   ELSE

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