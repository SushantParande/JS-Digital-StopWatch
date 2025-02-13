
let timer;
let isRunnig = false;
let millisecond = 0, second = 0, minute = 0;

function updateDisplay(){
    document.getElementById("stopwatch").innerText = `${minute}:${second}:${millisecond}`

}

function startStopWatch(){
    if(!isRunnig){
        isRunnig = true;
        timer = setInterval(() =>{
            millisecond++;
            if(millisecond>=100){
                second++
                millisecond = 0;

            }
            if(second>=60){
                minute++;
                second=0;
            }
            updateDisplay();
        },10)
    }
}
function stopStopWatch(){
        clearInterval(timer);
        isRunnig = false;
    }

function resetStopWatch(){
        isRunnig = false
        clearInterval(timer)
        millisecond = 0, second = 0, minute = 0;
        updateDisplay();
}
