menu_list_array = ["AMERICANO","CAFFÈ LATTE","CAFFÈ MOCHA","CAPPUCCINO","COLD BREW COFFEE","DOUBLE ESPRESSO"]
function getmenu(){
var htmldata;
htmldata="<ol class='menu_list'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
 htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'  
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById('add_item').value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for( var i=0; i<menu_list_array.length;i++){
htmldata=htmldata+'<div class="card">'+'<img src="images/ci.webp">'+menu_list_array[i]+'</div>'
}
htmldata=htmldata+"<section>"
document.getElementById('display_addedmenu').innerHTML=htmldata;
}

function buy_item(){
var bup=document.getElementById("bp").value;
document.getElementById("result").innerHTML="your order for "+bup+" coffee has been placed";
}

