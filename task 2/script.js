const display = document.getElementsById('display');
const starStopbutton = document.getElementsById('starstop');
const resetbutton = document.getElementsById('reset');
const lapButton = document.getElementsById('lap');
const lapsList= document.getElementsById('lapsList');

let startTime;
let running = false;
let laps = [];

function formatTime(milliseconds)
{
    const date = new Date(milliseconds);
    return date.toISOString().substr(11,8);
}
function updateDisplay()
{
    const date = running ? Date.now() - startTime :0;
    display.textContent = formatTime(elapsed);
} 
function toggleStarStop()
{
    if (running)
    {
        running = false;
        starStopButton.textContent = 'Start';
    }else
    {
        running = true;
        startTime = Date.now() - (laps.length >0 ? laps.reduce((sum ,lap) => sum + lap ) :0 );
        starStopButton.textContent = 'Stop';
    }

    
}
