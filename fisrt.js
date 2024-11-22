document.getElementById("meanheading").innerHTML= "<span style ='color:Red; font-weight:bold;'> HI! </span>  <span style='text-decoration:underline;font-weight:bold;'>  Future Developer </span>" ;

document.getElementById('on').onclick = function (){
    
    document.getElementById("image").src = "/on.gif";
    document.getElementById('meanheading').style.display="none";   
}

document.getElementById('off').onclick = function (){
    
    document.getElementById("image").src = "/off.gif"
    document.getElementById('meanheading').style.display="block";   
}
