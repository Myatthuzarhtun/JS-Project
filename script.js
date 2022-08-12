//stopwatch
const stopwatchTag = document.getElementsByClassName("stopwatch")[0];
const startTag = document.getElementsByClassName("start")[0];
const pauseTag = document.getElementsByClassName("pause")[0];
const continueTag = document.getElementsByClassName("continue")[0];
const restartTag = document.getElementsByClassName("restart")[0];


let minutes = 0;
seconds = 0;
hours = 0;
const startTime = () => {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;

        if (minutes = 60) {
            hours += 1;
        }

    }
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    stopwatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
    // console.log(hours, minutes, seconds);
};

let intervalId;
startTag.addEventListener("click", () => {
    (seconds = 0), (minutes = 0), (hours = 0);
    intervalId = setInterval(startTime, 1000);
});
// clearInterval(intervalId);

pauseTag.addEventListener("click", () => {
    clearInterval(intervalId);
});
continueTag.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1000);
});
restartTag.addEventListener("click", () => {
    clearInterval(intervalId);
    (seconds = 0), (minutes = 0), (hours = 0);
    intervalId = setInterval(startTime, 1000);
});