function displayValue(){
    var name=document.getElementById("name").value;
   var eid=document.getElementById("eid").value;
   var Erole=document.getElementById("Erole").value;
   var salary=document.getElementById("salary").value;
   var signature=document.getElementById("signature").value;
   
   document.write("<h1>Your Details</h1>");
    document.write("Your Name  :"+name+"<br>");
    document.write("Your Employee ID  :"+eid+"<br>");
    document.write("Role  :"+Erole+"<br>");
    document.write("Your Salary  :"+salary+"<br>");
    document.write("Please sign here  :"+signature+"<br>");

   
}
function formSubmit(){
    alert("Your Details has been Submit!! THANK YOU!!!!");
}
function formClear(){
    alert("Your input data will be erase!!");
}