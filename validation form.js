<html>
<head>
<script>
function validate()                                    
{
    var name = document.forms["RegForm"]["Name"];              
    var email = document.forms["RegForm"]["EMail"];    
    var phone = document.forms["RegForm"]["Telephone"];  
    var what =  document.forms["RegForm"]["Subject"];  
    var password = document.forms["RegForm"]["Password"];  
    var address = document.forms["RegForm"]["Address"];  
   
    if (name.value == "")                                  
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
   
    if (address.value == "")                              
    {
        window.alert("Please enter your address.");
        name.focus();
        return false;
    }
       
    if (email.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
   
    if (email.value.indexOf("@", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
   
    if (email.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
   
    if (phone.value == "")                          
    {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }
   
    if (phone.value.match(/^\d+$/))                          
    {
        window.alert("Integer only.");
        phone.focus();
        return false;
    }
   
    if (password.value == "")                        
    {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }
   
    if (what.selectedIndex < 1)                  
    {
        alert("Please enter your course.");
        what.focus();
        return false;
    }
   
    return true;
}</script>
 
<style>
form {                                        
    margin-left: 70px;
    font-weight: bold ;  
    clear: left;
    width: 1000px;
    text-align: center;
    margin-right: 10px;
    font-family:sans-serif,bold, Arial, Helvetica;
    font-size:14px;
}
   

   
</style></head>
   
<body bgcolor="pink">
<h1 style="text-align: center"> REGISTRATION FORM </h1>          
<form name="RegForm" action="/submit.php" onsubmit="return validate()" method="post">  
     
    Name: <input type="text" size=65 name="Name"> <br> <br><br>      
    Address: <input type="text" size=65 name="Address">  <br><br><br>  
    E-mail: <input type="text" size=65 name="EMail">  <br><br><br>  
    Password: <input type="password" size=65 name="Password"> <br> <br><br>
    Telephone: <input type="text" size=65 name="Telephone"> <br> <br><br>  
           
    SELECT YOUR COURSE    
        <select type="text" value="" name="Subject">
            <option>BTECH</option>
            <option>BBA</option>
            <option>BCA</option>
            <option>B.COM</option>  
        </select><br><br><br>  
    Comments:  <textarea cols="55" name="Comment">  </textarea><br><br><br>  
    <input type="submit" value="send" name="Submit"> <br><br><br>    
        <input type="reset" value="Reset" name="Reset">  
             
</form>
</body>
</html>


