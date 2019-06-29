// Get the modal
var signupmodal = document.getElementById("signupModal");
var signinmodal = document.getElementById("signinModal");
var createmodal = document.getElementById("createpost");

// Get the button that opens the modal
var btn = document.getElementById("signup");
var signinbtn = document.getElementById("signin");
var lsignup = document.getElementById("lingsignup");
var createmodalbutton = document.getElementById("create-post");

// Get the <span> element that closes the modal
var span = document.getElementById("signupclose");
var spansignin = document.getElementById("signinclose");
var createclose = document.getElementById("createclose");

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

createmodalbutton.onclick = function() {
  createmodal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  signupmodal.style.display = "none";
};

spansignin.onclick = function() {
  signinmodal.style.display = "none";
};

createclose.onclick = function() {
  createmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupmodal) {
    console.log("test");
    signupmodal.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == createmodal) {
    createmodal.style.display = "none";
  }
};
