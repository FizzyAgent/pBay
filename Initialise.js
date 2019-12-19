function loginCheck(user){
    
    if(user.length == 0){
        loginFail();
    }
    else{
        setUser(user[0]["username"]);
    }
}

function setUser(username){
    localStorage.setItem("username",username);
    window.location = "MainPage.html";
}

function loginFail(){
    alert("Incorrect Username/Password");
}