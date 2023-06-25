function damateba(){
    var a =document.getElementById("name");
    var x = document.getElementById("email");
    var y = document.getElementById("password");
    
    if (a.value == "" || a.length == 0 ){
    document.getElementById("text10").innerHTML="შეიყვანეთ სახელი ";
    a.style.borderColor="red";
  
 } else if (x.value =="" || x.length == 0){
     document.getElementById("text10").innerHTML="";
  
   
     document.getElementById("text12").innerHTML=" შეიყვანეთ ელ. ფოსტა";
     x.style.borderColor="red";
     a.style.borderColor="green";
     
 }else if (y.value == "" || y.length == 0 ) {
     document.getElementById("text12").innerHTML="";
    
     document.getElementById("text14").innerHTML="შეიყვანეთ პაროლი";
     y.style.borderColor="red";
     x.style.borderColor="green";
 
    
 }else {
     document.getElementById("text14").innerHTML=""
   
     window.alert ("თქვენ წარმატებით გაიარეთ რეგისტრაცია!")
     y.style.borderColor="green";
 }
 }