//Debut

const handSecond = document.querySelector(".hand-second");
const handMinute = document.querySelector(".hand-minute");
const handHour = document.querySelector(".hand-hour");

function setDate(){
    
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360)+ 90;
    handSecond.style.transform =`rotate(${secondsDegrees}deg)`;
    

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360 ) +90 ;
    handMinute.style.transform=`rotate(${minsDegrees}deg)`;

    const hour = now.getMinutes()
    const hourDegrees = ((hour/60)* 360 )+90;
    handHour.style.transform =`rotate(${hourDegrees}deg)`;
    

}

 setInterval(setDate,1000)

