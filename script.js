var index = 0;

function changeColors(){
var colors = ["red", "yellow","blue" , "black", "green" , "purple"]
document.getElementsByTagName("body")[0].
style.backgroundColor= colors[index++];
if (index > colors.length-1)
index=0 ;
}

