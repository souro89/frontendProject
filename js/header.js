// Get the modal
var signupmodal = document.getElementById("signupModal");
var signinmodal = document.getElementById("signinModal");

// Get the button that opens the modal
var btn = document.getElementById("signup");
var signinbtn = document.getElementById("signin");
var lsignup = document.getElementById("lingsignup");

// Get the <span> element that closes the modal
var span = document.getElementById("signupclose");
var spansignin = document.getElementById("signinclose");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  signupmodal.style.display = "flex";
};

signinbtn.onclick = function() {
  signinmodal.style.display = "flex";
};

lsignup.onclick = function() {
  signinmodal.style.display = "none";
  signupmodal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  signupmodal.style.display = "none";
};

spansignin.onclick = function() {
  signinmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
