// 

// function made by me to print current time
function getTime(){
    const timeNow = Date.now() / 1000; // Current time in seconds

    const secondsInDay = 24 * 60 * 60; // Total seconds in a day
    const time = timeNow % secondsInDay; // Seconds since start of the day

    let hr = Math.floor(time / 3600);
    let min = Math.floor((time % 3600) / 60);

    // convert UTC to IST
    hr = min > 30 ? (hr + 6) % 24: (hr + 5) % 24;
    min = (min + 30) % 60;
    const sec = Math.floor(time % 60);

    console.log(hr , ":", min, ":", sec);
}


// main program

// Function to get the current time and format it as HH:MM:SS
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Ensure double digits for hours, minutes, and seconds
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

// Function to clear the terminal and display the clock
function displayClock() {
    // Clear the terminal
    console.clear();

    // Display the current time
    console.log(getCurrentTime());
}

// Update the clock every second
setInterval(displayClock,1 * 1000);
  