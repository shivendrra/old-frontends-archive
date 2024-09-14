// get all user info and save it

var saveItem = localStorage.getItem("saveItem");

function getinfo() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    localStorage.setItem("saveItem", email);
    localStorage.setItem("saveItem", password);
}