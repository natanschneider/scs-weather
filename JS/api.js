window.onload = async()=>{
    
}

async function getAPI(){
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-29.717778&lon=-52.425833&lang=pt_br&appid=bc4c64993f3989bff1bc2a4b87192c4c&units=metric");
    
    let data = await response.json();

    writeHTML(data);
}

function writeHTML(data){
    
}