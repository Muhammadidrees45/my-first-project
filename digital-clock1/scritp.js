const hour = document.getElementById("hour");
const minut = document.getElementById("minut");
const second = document.getElementById("second");

setInterval(()=>{
let currentTime = new Date;

hour.innerHTML = (currentTime.getHours()<10 ? "0" : " ") + currentTime.getHours();
minut.innerHTML = (currentTime.getMinutes()<10 ? "0" : " " ) + currentTime.getMinutes();
second.innerHTML = (currentTime.getSeconds()<10 ? "0" : " ") + currentTime.getSeconds();
},1000)
