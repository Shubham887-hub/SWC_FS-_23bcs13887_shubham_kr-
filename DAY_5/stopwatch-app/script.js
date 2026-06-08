const display =
document.getElementById(
    "display"
);

const startBtn =
document.getElementById(
    "startBtn"
);

const pauseBtn =
document.getElementById(
    "pauseBtn"
);

const resetBtn =
document.getElementById(
    "resetBtn"
);

let elapsedSeconds = 0;

let timer = null;


// Format Time

function formatTime(seconds){

    const hrs =
    Math.floor(seconds / 3600);

    const mins =
    Math.floor(
        (seconds % 3600) / 60
    );

    const secs =
    seconds % 60;

    return (
        String(hrs)
        .padStart(2,"0")
        + ":" +
        String(mins)
        .padStart(2,"0")
        + ":" +
        String(secs)
        .padStart(2,"0")
    );
}


// Update UI

function updateDisplay(){

    display.textContent =
    formatTime(
        elapsedSeconds
    );
}


// Start

function startTimer(){

    if(timer !== null){

        return;
    }

    timer = setInterval(() => {

        elapsedSeconds++;

        updateDisplay();

    },1000);
}


// Pause

function pauseTimer(){

    clearInterval(timer);

    timer = null;
}


// Reset

function resetTimer(){

    clearInterval(timer);

    timer = null;

    elapsedSeconds = 0;

    updateDisplay();
}


// Events

startBtn.addEventListener(
    "click",
    startTimer
);

pauseBtn.addEventListener(
    "click",
    pauseTimer
);

resetBtn.addEventListener(
    "click",
    resetTimer
);
