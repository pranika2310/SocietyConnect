const greeting = document.querySelector(".welcome-section h1");

const hour = new Date().getHours();

if(hour < 12){
    greeting.textContent = "Good Morning, Pranika 👋";
}
else if(hour < 18){
    greeting.textContent = "Good Afternoon, Pranika 👋";
}
else{
    greeting.textContent = "Good Evening, Pranika 👋";
}