const hours_block = document.getElementById("hours");
const minutes_block = document.getElementById("minutes");
const seconds_block = document.getElementById("seconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const lap = document.getElementById("lap");
const sound = document.getElementById("sound");
const lapscontainer = document.getElementById("laps-container")
const p= document.createElement("p")


let hrs = 0;
let min = 0;
let sec = 0;
let laps = [];
// let p = `${hrs} : ${min} : ${sec}`;

// p.style.backgroundColor = "red"
// p.style.width = "100%"

hours_block.textContent = hrs + " hrs ";
minutes_block.textContent = min + " min ";
seconds_block.textContent = sec + " sec ";
let j=true;
let id;
function updateTimer(){
     id = setInterval(() => {

        seconds_block.textContent = ++sec + " sec ";
    
        if(sec >= 59){
            minutes_block.textContent = ++min + " min ";
            sec = 0;
        }
    
        if(min >= 59){
            hours_block.textContent = ++hrs + " hrs ";
            min = 0;
            sec = 0;
        }
    },1000);
}


start.addEventListener('click' , () => {
    
if(j==true)
{
    updateTimer();
    sound.play();
    j=false;
}
})

stop.addEventListener('click', () => {
    clearInterval(id);
    sound.pause();
    j=true;
})

// lap.addEventListener('click', () => {
//     if(id){
//         laps.push(p);
//     }
//     console.log(laps);
// })

lap.addEventListener('click', () => {
    let newLap = document.createElement('div');
    newLap.textContent = `${hrs} hrs : ${min} min : ${sec} sec`;
    lapscontainer.appendChild(newLap);
});










