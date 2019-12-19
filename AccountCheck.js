function isLoggedIn(){
    var username = localStorage.getItem("username");
    
    if(username == null){
        return false;
    }
    else{
        return true;
    }
}

function logout(){
    
    localStorage.removeItem("username");
    window.location = "LoginPage.html";
}
