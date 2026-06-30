const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

if (password && toggle) {

    toggle.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            toggle.textContent = "🙈";

        } else {

            password.type = "password";
            toggle.textContent = "👁️";

        }

    });

}
const loginForm = document.querySelector(".login-form");

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Login functionality will be added after backend development.");

    });

}
// Signup Password Toggle

const signupPassword = document.getElementById("signupPassword");
const toggleSignupPassword = document.getElementById("toggleSignupPassword");

if(signupPassword && toggleSignupPassword){

toggleSignupPassword.addEventListener("click",()=>{

if(signupPassword.type==="password"){

signupPassword.type="text";
toggleSignupPassword.textContent="🙈";

}else{

signupPassword.type="password";
toggleSignupPassword.textContent="👁️";

}

});

}

// Confirm Password Toggle

const confirmPassword=document.getElementById("confirmPassword");
const toggleConfirmPassword=document.getElementById("toggleConfirmPassword");

if(confirmPassword && toggleConfirmPassword){

toggleConfirmPassword.addEventListener("click",()=>{

if(confirmPassword.type==="password"){

confirmPassword.type="text";
toggleConfirmPassword.textContent="🙈";

}else{

confirmPassword.type="password";
toggleConfirmPassword.textContent="👁️";

}

});

}

// Signup Form

const signupForm=document.querySelector(".signup-form");

if(signupForm){

signupForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Signup functionality will be implemented with the backend.");

});

}