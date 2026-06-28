const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";
        toggle.textContent = "🙈";

    }else{

        password.type = "password";
        toggle.textContent = "👁️";

    }

});
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Login functionality will be added after backend development.");

});