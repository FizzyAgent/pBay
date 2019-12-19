var tags=["Electronic","Toy","Entertainment","Furniture","Food","Gift","Decorative","Craft","Vehicle",
    "Utility","Outdoor","Software","Music","Children","Misc"];

function fillItem(item){
    
    var imgNum = 10+parseInt(item[0]["id"]);
    var img = "./Sample Photos/usertile"+imgNum+".bmp";
    var itemImg = document.getElementById("itemImg");
    itemImg.setAttribute("src",img);
    
    var itemName = document.getElementById("itemName");
    itemName.innerHTML = item[0]["name"];
    
    var itemDesc = document.getElementById("itemDesc");
    itemDesc.innerHTML = "Price: $" + item[0]["price"] + "<br><br>Description: " + item[0]["info"];
    
    var itemTag = item[0]["tag"].split("");
    var tagArray = [];
    
    for(var i=0; i<tags.length; i++){
        if(itemTag[i]==1){
            tagArray.push(tags[i]);
        }
    }
    
    var itemMisc = document.getElementById("itemMisc");
    itemMisc.innerHTML = "Seller: " + item[0]["seller"] + "<br><br>Date Posted: " + item[0]["datetime"] + "<br><br>Tags: " + tagArray;
    
    //alert("Item Filled");
    openItem();
}