function updateTime() {
    // Replace the date below with the date you want to countdown to
    var countDownDate = new Date("Nov 20, 2023 18:00:00").getTime();

    var daysElement = document.getElementById("days");
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Calculate the time difference between now and the countdown date
        var timeLeft = countDownDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            daysElement.innerHTML = "Countdown expired!";
        } else {
            // Calculate the number of days, hours, minutes, and seconds left
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update the elements on the page
            daysElement.innerHTML = days;
            hoursElement.innerHTML = hours;
            minutesElement.innerHTML = minutes;
            secondsElement.innerHTML = seconds;
        }
    }, 1000); // Update every 1 second
}

// Call the function to start the countdown
updateTime();
