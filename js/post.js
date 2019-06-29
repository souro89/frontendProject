function editDesc() {
  var editbtn = document.getElementById("edit");
  var editbtnHTML = document.getElementById("edit").innerHTML;
  var blogBody = document.getElementById("blogBody").innerText;
  var blogText = document.getElementById("blogText");
  if (
    editbtnHTML ==
    'Edit<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
  ) {
    editbtn.innerHTML = "save";
    blogText.innerHTML =
      '<textarea id="blogBody" rows="15" cols="175">' +
      blogBody +
      "</textarea>";
  }
  if (editbtnHTML == "save") {
    editbtn.innerHTML =
      'Edit<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
    var blogEdit = document.getElementById("blogBody").value;
    blogText.innerHTML = '<p id="blogBody">' + blogEdit + "</p>";
  }
}

var likes = 0;

function likeCount() {
  var likebtn = document.getElementById("like");
  var likecount = document.getElementById("likecount");
  if (likes == 0) {
    likebtn.innerHTML = "Liked!";
    likecount.innerText = "1 person likes this!";
    likes = likes + 1;
  } else if (likes > 0) {
    likes = likes + 1;
    likecount.innerText = likes + " people liked this!";
  }
}

function addComments() {
  var cmnt = document.getElementById("add-comment").value;
  var addCmnt = document.getElementById("comment-area");
  addCmnt.innerHTML =
    '<p class="comment-content"><span class="middle-align">' +
    cmnt +
    "</span></p>" +
    addCmnt.innerHTML;
  var divcomment = document.getElementById("comment-area");
  divcomment.style.backgroundColor = "#D3D3D3";
}
