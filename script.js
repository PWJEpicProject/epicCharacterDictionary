document.getElementById('authorSelect0').addEventListener('click', selectAuthor0, true);
document.getElementById('authorSelect1').addEventListener('click', selectAuthor1, true);
document.getElementById('authorSelect2').addEventListener('click', selectAuthor2, true);
document.getElementById('authorSelect3').addEventListener('click', selectAuthor3, true);
document.getElementById('authorSelect4').addEventListener('click', selectAuthor4, true);




document.getElementById('backtoWebContent').addEventListener('click', goBackfromAuthor0, true);
document.getElementById('characterData').addEventListener('click', displayData, true);


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

function selectAuthor1() {
  authorContainer1 = 'authorContainer1';
  web_content = 'web-content';
  var web_content = document.getElementById(web_content); 
  var authorContainer1 = document.getElementById(authorContainer1);
  visitPage(authorContainer1, web_content); 
}

function selectAuthor2() {
  authorContainer2 = 'authorContainer2';
  web_content = 'web-content';
  var web_content = document.getElementById(web_content); 
  var authorContainer2 = document.getElementById(authorContainer2);
  visitPage(authorContainer2, web_content); 
}

function selectAuthor3() {
  authorContainer3 = 'authorContainer3';
  web_content = 'web-content';
  var web_content = document.getElementById(web_content); 
  var authorContainer3 = document.getElementById(authorContainer3);
  visitPage(authorContainer3, web_content);
} 

function selectAuthor4() {
  authorContainer4 = 'authorContainer4';
  web_content = 'web-content';
  var web_content = document.getElementById(web_content); 
  var authorContainer4 = document.getElementById(authorContainer4);
  visitPage(authorContainer4, web_content); 
}

// function displayData() {
//   empinfo = 'empinfo';
//   web_content = 'web-content_auth';
//   var web_content = document.getElementById(web_content); 
//   var empinfo = document.getElementById(empinfo);
//   visitPage(empinfo, web_content); 
// }

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

function backToAuthorList() {
  document.getElementById("web-content").style.display="block";
  document.getElementById("web-content").style.visibility="visible";
  document.getElementById("authorContainer0").style.display="none";
  document.getElementById("authorContainer0").style.visibility="hidden";
  document.getElementById("authorContainer1").style.display="none";
  document.getElementById("authorContainer1").style.visibility="hidden";
  document.getElementById("authorContainer2").style.display="none";
  document.getElementById("authorContainer2").style.visibility="hidden";
  document.getElementById("authorContainer3").style.display="none";
  document.getElementById("authorContainer3").style.visibility="hidden";
  document.getElementById("authorContainer4").style.display="none";
  document.getElementById("authorContainer4").style.visibility="hidden";
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

