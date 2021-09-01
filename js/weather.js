const loadWeather = () => {
    const searchResult = document.getElementById('search-input');
    const spinner = document.getElementById('spinner');
    const searchText = searchResult.value;
    searchResult.value = '';
    const showWeather = document.getElementById('show-weather');
    if (searchText == '') {
        showWeather.innerHTML = `
        <h1 class = 'error'>Enter your city</h1>
        `;
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=c7c61809061789d239a583029c7302aa`
        spinner.classList.remove('d-none');
        fetch(url)
            .then(res => res.json())
            .then(data => displayWeather(data))
    }
};

const displayWeather = (details) => {
    console.log(details)
    const showWeather = document.getElementById('show-weather');
    if (details.message === 'city not found') {
        showWeather.innerHTML = `
        <h1 class = 'error'>your city is not found</h1>
        `
        spinner.classList.add('d-none');
    } else {

        const div = document.createElement('div');
        showWeather.textContent = '';
        div.classList.add('main')
        spinner.classList.add('d-none');
        div.innerHTML = `
    <img class ='img' src="http://openweathermap.org/img/w/${details.weather[0].icon}.png">
    <h1>${details.name}</h1>
    <h1>${((details.main.temp)-273.15).toFixed(1)}&deg;C</h1>
    <h1>${details.weather[0].description}</h1>
    `
        showWeather.appendChild(div)
    }
}