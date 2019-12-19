function queryItem(){
    
    if(!isLoggedIn()){
        window.location = "LoginPage.html";
    }
    else{
    
    var url = window.location.toString();
    var urlSplit = url.split(/id=|&/);
    var itemNum = urlSplit[1];
    
    var xhr,output;
    var condition = "id="+itemNum;
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
                fillItem(output);
            }
        }
    };
    
    xhr.open("GET","General_IO.php?v=&db=item&c="+condition,true);
    xhr.send();
    }
}

