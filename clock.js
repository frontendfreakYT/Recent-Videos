// Update clock every 1 second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();

function updateClock() {
    const timeElement = document.getElementById("time");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = 'AM';

    // Convert from 24-hour to 12-hour clock
    if (hours >= 12) {
        period = 'PM';
    }
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12; // So that Midnight and Noon won't be 0
    }

    // Format time to always show two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${period}`;
    timeElement.textContent = timeString;
}