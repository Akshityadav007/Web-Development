const time = new Date();
let hr = time.getHours();
let mins = time.getMinutes();
let sec = time.getSeconds();

function displayClock(){
    sec++;
    if(sec === 60){
        sec = 0;
        mins++;
        if(mins === 60){
            mins = 0;
            hr++;
            if(hr === 24){
                hr = 0;
            }
        }
    }

   
    // Formatting for leading zeros
    const formatted24Hr = hr < 10 ? '0' + hr : hr;            // 24 hr clock
    const formattedMins = mins < 10 ? '0' + mins : mins;
    const formattedSec = sec < 10 ? '0' + sec : sec;


    // 12 hr clock
    const new12hr = hr % 12;
    const formatted12Hr = new12hr < 10 ? '0' + new12hr : new12hr;
    const kaal = hr >= 12 ? 'PM' : 'AM'; 

    console.log(formatted24Hr + ":" + formattedMins + ":" + formattedSec);
    console.log(formatted12Hr + ":" + formattedMins + ":" + formattedSec + " " + kaal);
}

function wrapperFn(){
    console.clear();
    displayClock();
}

setInterval(wrapperFn, 1000);
