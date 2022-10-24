window.onload = async()=>{
    writeHTML();
}

async function writeHTML(){
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-29.717778&lon=-52.425833&lang=pt_br&units=metric&appid=");
    
    let data = await response.json();
    
    document.getElementById('main').innerHTML = data['weather'][0]['description'];
    document.getElementById('temperature').innerHTML = data['main']['temp'] + '°C';
    document.getElementById('humidity').innerHTML = 'Umidade: ' + data['main']['humidity'] + '%';
    document.getElementById('wind').innerHTML = 'Vento: ' + data['wind']['speed'] + ' m/s';
    document.getElementById('direction').innerHTML = 'Direção: ' + data['wind']['deg'] + '°';

    let visibilidade = (parseInt(data['visibility']) * 0.001);
    document.getElementById('visibility').innerHTML = 'Visibilidade: ' + visibilidade + ' km';

    let icon = "http://openweathermap.org/img/wn/" + data['weather'][0]['icon'] + "@2x.png";
    document.getElementById('icone').src = url(icon);
}