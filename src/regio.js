import axios from "axios";

async function getCountriesRegio(){
    try{
        const result1 = await axios.get('https://restcountries.com/v2/all')
        console.log(result1);
        const list1 = document.getElementById('list-of-countriesregio');
        result1.data.map((user) => {
            const item1 = document.createElement('li');
            if(user.region === 'Africa'){
                item1.setAttribute('class','africa');
                item1.textContent = user.name;
                list1.appendChild(item1);
            }else if(user.region === 'Americas'){
                item1.setAttribute('class', 'americas');
                item1.textContent = user.name;
                list1.appendChild(item1);
            }
            else if(user.region === 'Asia'){
                item1.setAttribute('class', 'asia');
                item1.textContent = user.name;
                list1.appendChild(item1);
            }
            else if(user.region === 'Europe'){
                item1.setAttribute('class', 'europe');
                item1.textContent = user.name;
                list1.appendChild(item1);
            }
            else if(user.region === 'Oceania'){
                item1.setAttribute('class', 'oceania');
                item1.textContent = user.name;
                list1.appendChild(item1);
            }
        })
    }catch (e){
        console.error(e);
    }
}
getCountriesRegio()