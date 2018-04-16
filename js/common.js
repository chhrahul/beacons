
  jQuery(document).ready(function($) {
  
  if(localStorage.login == 1)
  {
     $('#login-signup').hide(); 
     $('#dashboard').show(); 
  }
  
  $("#signupform").submit(function(e){
    e.preventDefault();
    var email = jQuery("#register-email").val();
    var pwd = jQuery("#signup-password").val();
    var pwd1 = jQuery("#signup-confirmpassword").val();
    if(pwd != "" && pwd != pwd1) {
            
            alert("Error: Please check that you've entered and confirmed your password!");
            jQuery("#signup-confirmpassword").focus();
            return false;
            
    }   
     else{ 
      
          $.ajax({
            type: "POST",
            url: "http://myonlinebrain.com.au/api.php",
            data: {email : email,pwd : pwd,func:'register'},
            cache: false,
            datatype: 'json',
            success: function(data){ 
              var json = $.parseJSON(data);
              alert(json.message);
              if(json.status == 1)
              {
                $('#signupbox').hide(); $('#loginbox').show();
                $('#login-email').val(email);
                $('#login-password').focus();  
              }
             
            }
          });
          }    
            });
            
            
          $("#loginform").submit(function(e){
    e.preventDefault();
    var email = jQuery("#login-email").val();
    var pwd = jQuery("#login-password").val();
    
      //alert(email)
          $.ajax({
            type: "POST",
            url: "http://myonlinebrain.com.au/api.php",
            data: {email : email,pwd : pwd,func:'login'},
            cache: false,
            datatype: 'json',
            success: function(data){ 
              var json = $.parseJSON(data);
              //alert(json.status);
              if(json.status == 1)
              {
                $('#login-signup').hide(); 
                $('#dashboard').show();
                localStorage.login = 1;
                localStorage.email = email;
              }
              else
              {
                alert(json.message);
              }
             
            
          }
          
          });
           
            });   
            
            
       });     