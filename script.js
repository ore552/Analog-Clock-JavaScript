//Give references to all the DOM elements we're using.
const body = document.querySelector("body"),
    hourHand  = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

//Make sure the mode starts off as "Dark Mode" in the localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
    //Add "dark" to the body and set the modeSwitch text to "Light Mode"
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

//Add an eventlistener to modeSwitch
modeSwitch.addEventListener("click", () => {
    //Change (toggle) the "dark" class on the body element
    body.classList.toggle("dark");
    //Be sure if the "dark" class is present in the element
    const isDarkMode = body.classList.contains("dark");
    //Set the ModeSwitch tex with depending on the "dark" class presence
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    //Set the localStorage "mode" item based on "dark" class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
//Get current time and calculate degrees for clock hands
let date = new Date(),
    sectToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360 + (sectToDeg / 60),
    hourToDeg = (date.getHours() / 12) * 360 + (minToDeg / 12);

//Set the transform property of each hand to rotate it to the correct position
secondHand.style.transform = `rotate(${sectToDeg}deg)`;
minuteHand.style.transform = `rotate(${minToDeg}deg)`;  
hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};

//Call the updateTime function every second to keep the clock updated
setInterval(updateTime, 1000);

//Call the updateTime function once to set the initial position of the hands
updateTime();

