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