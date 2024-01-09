document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Replace with your target date and time (year, month (0-based), day, hour, minute, second)
    const targetDate = new Date(2025, 0, 1, 0, 0, 0).getTime();
    console.log(targetDate);

    function updateCountdown() {
        const now = new Date().getTime(); //currentDate
        console.log(now);
        const timeDifference = targetDate - now;
        console.log(timeDifference);

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        //console.log(days);
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        //console.log(seconds);

        daysElement.textContent = days < 10 ? days : days;
        hoursElement.textContent = hours < 10 ? hours : hours;
        minutesElement.textContent = minutes < 10 ? minutes : minutes;
        secondsElement.textContent = seconds < 10 ? seconds : seconds;
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});