let OWtoken = "";

window.onload = async()=>{
    getAPI(OWtoken);
}

async function getAPI(appId){
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-29.717778&lon=-52.425833&lang=pt_br&units=metric&appid=" + appId);
    
    let data = await response.json();

    writeHTML(data);
}

function writeHTML(data){
    document.getElementById('main') = data['weather'][0]['description'] + '°C';
    document.getElementById('temperature') = data['main']['temp'] + '°C';
    document.getElementById('humidity') = 'Umidade: ' + data['main']['humidity'] + '%';
    document.getElementById('visibility') = 'Visibilidade: ' + parseFloat(data['visibility'] / 0.001) + 'km';
    document.getElementById('wind') = 'Vento: ' + data['wind']['speed'] + ' m/s';
    document.getElementById('direction') = 'Direção: ' + data['wind']['deg'] + '°';

    let icon = "http://openweathermap.org/img/wn/" + data['weather'][0]['icon'] + "@2x.png";
    document.getElementById('icon').src = icon;
}