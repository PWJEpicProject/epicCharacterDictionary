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