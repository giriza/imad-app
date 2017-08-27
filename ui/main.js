

//submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
     //create a request to counter endpoint
   var request = new XMLHttpRequest();
   request.onreadystatechange = function () 
   {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)
          {
               //capture a list of names and render it as a list
              console.log('user logged in');
              alert('logged in succesfully!');
          }
          
          else if(request.status === 403)
          {
              alert('username/password is incorrect!');
          }
          else if(request.status === 500)
          {
              alert('Oopsy, something went wrong on the server!');
          }
      }
      //not yet done - no action reqd
   };
      //make  a request
 var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;
 
 console.log(username);
 console.log(password);
 request.open('POST','http://girijaiyer1996.imad.hasura-app.io/login',true);
 request.setRequestHeader('Content-Type','application/json');
 request.send(JSON.stringify({username : username, password : password}));
 };