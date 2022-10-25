window.onload = async()=>{
    writeHTML();
}

async function writeHTML(){
    let token = "";

    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-29.717778&lon=-52.425833&lang=pt_br&units=metric&appid="+token);
    
    let data = await response.json();
    
    document.getElementById('main').innerHTML = data['weather'][0]['description'];
    document.getElementById('temperature').innerHTML = data['main']['temp'] + '°C';

    document.getElementById('humidity').innerHTML = 'Umidade: ' + data['main']['humidity'] + '%';
    document.getElementById('wind').innerHTML = 'Vento: ' + data['wind']['speed'] + ' m/s';
    document.getElementById('direction').innerHTML = 'Direção: ' + data['wind']['deg'] + '°';

    let visibilidade = (parseInt(data['visibility']) * 0.001);
    document.getElementById('visibility').innerHTML = 'Visibilidade: ' + visibilidade + ' km';

    let iconCode = data['weather'][0]['icon'];

    let icon = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    document.getElementById('weatherIcon').src = icon;

    let css;

    if(iconCode === '01d' || iconCode === '01n'){
        css = 'body{background: url(\'../assets/background/sunny.gif\')}';
    }else if(iconCode === '02d' || iconCode === '02n' || iconCode === '03d' || iconCode === '03n' || iconCode === '04d' || iconCode === '04n'){
        css = 'body{background: url(\'../assets/background/clouds.gif\')}';
    }else if(iconCode === '09d' || iconCode === '09n' || iconCode === '10d' || iconCode === '10n' || iconCode === '11d' || iconCode === '11n'){
        css = 'body{background: url(\'../assets/background/rain.gif\')}';
    }else if(iconCode === '13n' || iconCode === '13d'){
        css = 'body{background: url(\'../assets/background/snow.gif\')}';
    }else{
        css = 'body{background: url(\'../assets/background/clouds.gif\')}';
    }

    let style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}