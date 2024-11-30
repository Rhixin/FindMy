function toggleSignUpLogIn() {
  const login = document.getElementById("login-container");
  const signup = document.getElementById("signup-container");

  login.classList.toggle("hidden");
  signup.classList.toggle("hidden");
}

function nextStepSignUp() {
  const step1 = document.getElementById("signup-step1");
  const step2 = document.getElementById("signup-step2");

  // Move step1 off to the left
  step1.style.transform = "translateX(-100%)";
  step1.style.opacity = "0";
  step1.style.display = "none";

  // Move step2 into view
  step2.style.transform = "translateX(0)";
  step2.style.opacity = "1";
  step2.style.display = "flex";
}

function prevStepSignUp() {
  const step1 = document.getElementById("signup-step1");
  const step2 = document.getElementById("signup-step2");

  // Move step1 off to the view
  step1.style.transform = "translateX(0)";
  step1.style.opacity = "1";
  step1.style.display = "flex";

  // Move step2 into right
  step2.style.transform = "translateX(100%)";
  step2.style.opacity = "0";
  step2.style.display = "none";
}

function LogIn() {
  window.open("home.html", "_self");
}

function SignUp() {
  window.open("home.html", "_self");
}
