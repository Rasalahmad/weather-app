const loadWeather = () => {
    const searchResult = document.getElementById('search-input');
    const searchText = searchResult.value;
    searchResult.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=c7c61809061789d239a583029c7302aa`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
};

const displayWeather = (details) => {
    // console.log(details)
    const showWeather = document.getElementById('show-weather');
    const div = document.createElement('div');
    showWeather.textContent = '';
    div.classList.add('main')
    div.innerHTML = `
    <img src="http://openweathermap.org/img/w/${details.weather[0].icon}.png">
    <h1>${details.name}</h1>
    <h1>${((details.main.temp)-273.15).toFixed(1)}&deg;C</h1>
    <h1>${details.weather[0].description}</h1>
    `
    showWeather.appendChild(div)
}