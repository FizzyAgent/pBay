var photoList=[];
var perPage = 30;

function fillTable(items){
    for(var i=10;i<45;i++)
        photoList.push("./Sample Photos/usertile"+i+".bmp");
    
    var table = document.getElementById("itemTable");
    
    for(var i=0; i<=Math.floor(items.length/3); i++){
        
        var row = table.insertRow(i);
        
        for(var j=0; j<3 && i*3+j<items.length; j++){
            var cell = row.insertCell(j);
            cell.innerHTML = "<img src='"+photoList[items[i*3+j]["id"]]+"' alt='Test Photo' width=140px><h3>"+items[i*3+j]["name"]+"</h3><p>$"+items[i*3+j]["price"]+"</p>";
            cell.setAttribute("onclick","location.href='ItemPage.html?id="+items[i*3+j]["id"]+"'");
        }
    }
}