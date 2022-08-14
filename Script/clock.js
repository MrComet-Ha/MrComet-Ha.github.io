const clock = document.querySelector("#clock");

function getTime(){
    const date = new Date();
    if (date !== null){
        const hour = date.getHours();
        const minute = date.getMinutes();
        const hours = String(hour).padStart(2,"0");
        const minutes = String(minute).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        clock.innerText = `It's ${hours}:${minutes}:${seconds}. Have a nice day.`;
    }
    else{
        clock.innerText = "00:00:00";
    }
}

getTime();
setInterval(getTime, 1000);