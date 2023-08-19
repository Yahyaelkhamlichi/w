let name=document.getElementById("name") 
let km =  document.getElementById("km")
let tomperatur= document.getElementById("harara")   
let humidity =document.getElementById("humidity")
let wather =document.querySelector(".wather")
let inp =document.getElementById("serch")
let  img =   document.getElementById("imgg")
let btn =document.getElementById("btn") 
let url ="https://api.openweathermap.org/data/2.5/weather?&appid=d124d68261c94b71116ad0b6a50a968c&units=metric&q="
async function getharara(hh){
    let response =   await fetch(url +hh )
    let data =await response.json()
    console.log(data)
   

   name.innerHTML=data.name
tomperatur.innerHTML=data.main.temp + "°C"
humidity.innerHTML=data.main.humidity +"%"  
   km.innerHTML=data.wind.speed

 if( data.weather[0].main =="Clouds"){
    img.src=".images/clouds.png"
 }
else if ( data.weather[0].main =="clear"){
img.src=".images/clear.png"
}
else if ( data.weather[0].main =="drizzle"){
img.src=".images/drizzle.png"
}
else if ( data.weather[0].main =="mist"){
img.src=".images/mist.png"
}
else if ( data.weather[0].main =="rain"){

img.src=".images/rain.png"
}
else if ( data.weather[0].main =="snow"){

img.src=".images/snow.png"
}
}
btn.addEventListener("click", ()=>{
    if(inp.value =="" ){
        wather.style.display="none"
    }
    else{
        getharara(inp.value)
        wather.style.display="block"
    }
    
    
    
})


