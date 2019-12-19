function fillProfile(items){
    
    var pImg = document.getElementById("pImg");
    pImg.setAttribute("src","./Sample Photos/default.bmp");
    
    var pName = document.getElementById("pName");
    pName.innerHTML = items[0]["name"];
    
    var pGender = document.getElementById("pGender");
    pGender.innerHTML = "Gender: " + items[0]["gender"];
    
    var pCty = document.getElementById("pCty");
    pCty.innerHTML = "Country: " + items[0]["country"];
    
    queryTable("seller = '" + localStorage.getItem("username")+"'");
}


