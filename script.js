const visitorNameInput = document.getElementById("visitorName");
const greetBtn = document.getElementById("greetBtn");
const greetingDisplay = document.getElementById("greeting");
greetBtn.addEventListener("click", function() {
    if(visitorNameInput.value.trim() == "") {
        greetingDisplay.textContent = "Please enter your name, id love to know your name .";
    } else {
        greetingDisplay.textContent = "Hello👋, " + visitorNameInput.value.trim() + "! Welcome to my portfolio.Thank you for visiting💖🥰.";
        greetingDisplay.style.color = " #ff6f91"; 
        greetingDisplay.style.fontSize = "30px";
        greetingDisplay.style.fontWeight = "bold";
        greetingDisplay.style.fontFamily = "Engagement, cursive";
    }
});