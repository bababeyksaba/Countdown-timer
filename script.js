const days =document.getElementById("days")
const hours =document.getElementById("hours")
const minutes =document.getElementById("minutes")
const seconds =document.getElementById("seconds")
const setTime = () =>{
    

    const day = new Date("1 Jan 2023").getTime();
    const currentDay = new Date().getTime();
    const second = (day - currentDay)/1000;
    

    days.innerHTML= Math.floor(second / 3600 / 24);
    hours.innerHTML= format(Math.floor(second / 3600) % 24);
    minutes.innerHTML= format(Math.floor((second / 60) % 60)) ;
    seconds.innerHTML= format(Math.floor(second ) % 60) ;

     
    function format(time){
        return time < 10 ? `0${time}` : time ;
    }

}

setTime();
setInterval(setTime,1000)


