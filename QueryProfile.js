function queryProfile(condition){
    
    if(!isLoggedIn()){
        window.location = "LoginPage.html";
    }
    else{
        
    var username = localStorage.getItem("username");
    var c = condition.split("un").join("'"+username+"'");
    
    var xhr,output;
    
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
                fillProfile(output);
            }
        }
    };
    
    xhr.open("GET","General_IO.php?v=name,gender,country&db=user&c="+c,true);
    xhr.send();
    }
}


