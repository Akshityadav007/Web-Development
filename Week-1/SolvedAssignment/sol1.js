let timer = 30;

function counter(){
    if(timer >= 0)
        console.log(timer--);
    else
        clearInterval(timerInterval);
}

const timerInterval = setInterval(counter, 1 * 1000);

/*
    -> The value returned by setInterval is an interval ID, which is a unique identifier for that specific interval.
    -> You need this ID to stop the interval using clearInterval.
    -> Without storing it, you wouldn't be able to clear the interval when needed.

    => If you have multiple intervals running, storing their IDs allows you to manage them individually. 
    => You can clear a specific interval without affecting others.
*/