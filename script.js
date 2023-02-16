
function myFunction(){
   

    if(document.getElementById("Username").value == ""){
       document.getElementById("testUsername").innerHTML= "Username is required"
    }else{
            document.getElementById("testUsername").value= "";
    };

    if(document.getElementById("Password").value == ""){
        document.getElementById("testPassword").innerHTML= "Password is required"}
        else{
         document.getElementById("testPassword").innerHTML="";
        }

     if(document.getElementById("Password2").value == ""){
        document.getElementById("testPassword2").innerHTML= "Confirm password is required";
     }else if(document.getElementById("Password2").value !== document.getElementById("Password").value){
        document.getElementById("testPassword2").innerHTML= "Confirm password and password do not match !"
     }else{
      document.getElementById("testPassword2").innerHTML="";
     }

     if(document.getElementById("testPassword2").innerHTML == "" && document.getElementById("testPassword").innerHTML == "" && document.getElementById("testUsername").innerHTML == ""){
      document.getElementById("success").innerHTML= "You have registered successfully";
     }
}