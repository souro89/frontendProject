var createmodal = document.getElementById("createpost");
var signupmodal = document.getElementById("signupModal");
var signinmodal = document.getElementById("signinModal");

var createmodalbutton = document.getElementById("create-post");

var createclose = document.getElementById("createclose");

createmodalbutton.onclick = function() {
  createmodal.style.display = "flex";
};

createclose.onclick = function() {
  createmodal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == createmodal) {
    createmodal.style.display = "none";
  }
  console.log("test");
  if (event.target == signupmodal) {
    signupmodal.style.display = "none";
  }
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
};
