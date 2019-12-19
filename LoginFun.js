function login(){
    
    var userText = document.getElementById("username");
    var username = "'"+userText.value+"'";
    var userText = document.getElementById("password");
    var password = "'"+userText.value+"'";
    
    var xhr,output;
    var condition = " username = " + username + " and password = " + password;    
    
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XHLHTTP");
    }
    
    xhr.onreadystatechange = function(){
        if (this.readyState === 4){
            if (this.status === 200){
                output = JSON.parse(this.responseText);
                loginCheck(output);
            }
        }
    };
    
    xhr.open("POST","General_IO.php?v=username&db=user&c="+condition,true);
    xhr.send();
}

function checkAccount(){
    if(isLoggedIn()){
        window.location = "MainPage.html";
    }
}