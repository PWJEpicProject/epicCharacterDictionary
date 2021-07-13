document.getElementById('authorSelect0').addEventListener('click', selectAuthor0, true);
document.getElementById('backtoWebContent').addEventListener('click', goBackfromAuthor0, true);


function myLoginButton() {
  document.getElementById("loginBtn").style.display="block";
  document.getElementById("backLink").style.display="block";
  document.getElementById("guestOrAuthor").style.display="none";
}

function backToChoice() {
  document.getElementById("guestOrAuthor").style.display="block";
  document.getElementById("loginBtn").style.display="none";
  document.getElementById("backLink").style.display="none";
}

function myDropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function selectAuthor0() {
  authorContainer0 = 'authorContainer0';
  web_content = 'web-content';
  var web_content = document.getElementById(web_content); 
  var authorContainer0 = document.getElementById(authorContainer0);
  visitPage(authorContainer0, web_content); 
}

function goBackfromAuthor0() {
  authorContainer0 = 'authorContainer0';
  web_content = 'web-content';
  var web_content = document.getElementById(web_content); 
  var authorContainer0 = document.getElementById(authorContainer0);
  exitPage(authorContainer0, web_content);
}

function visitPage(x,y) {
      // Make the login page disappear and the main page appear
      y.style.visibility = "hidden"
      y.style.display = "none";
      x.style.visibility = "visible";
      x.style.display = "block";
}

function exitPage(x,y) {
  // Make the login page disappear and the main page appear
  x.style.visibility = "hidden"
  x.style.display = "none";
  y.style.visibility = "visible";
  y.style.display = "block";
}




// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}