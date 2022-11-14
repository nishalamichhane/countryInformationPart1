import axios from 'axios';
async function getCountries() {
    const BASE_URI = 'https://restcountries.com/';
    const ENDPOINT = 'v2/all';
    try {
        const response = await axios.get(BASE_URI + ENDPOINT);
        const {data: countries} = response;
        const countryList = document.getElementById('list-of-countries');


        countries.sort((a, b) => {
            return a.population - b.population;
        });


        countries.map((country) => {

            countryList.innerHTML += `
            <li>            
            <h3 class = "${country.region}">${country.name}</h3>
            <p>Has a population of ${country.population} people</p>          
            <img src = "${country.flags.png}" alt = "${country.name}"/>
            </li>
            `
        });
    }
    catch (error) {
        console.log(error)
    }
}
getCountries()

/*const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result);
        const list = document.getElementById('list-of-countries');
        const plist = document.getElementById('population');
        result.data.map((country) => {
            const item = document.createElement('li');
            item.setAttribute('class','countryclass');
            item.textContent = country.name;
            const item1 = document.createElement('li');
            item1.setAttribute('class','countrypop');
            item1.textContent = 'Has a Population of: ' + country.population + ' People ';
            const item2 = document.createElement('li');
            //item2.setAttribute('class','countrypop');
            item2.textContent='<img src =' + country.flags.png + ' alt = ' + country.name + '/>';
            list.appendChild(item);
            list.appendChild(item1);
            list.appendChild(item2);*/
