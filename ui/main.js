//Counter Code
var button = document.getElementById('counter');
var counter = 0;

 button.onclick = function() {
  
  //make a request to counter endpoint
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
      if(request.readystate == XMLHttpRequest.DONE)
      {
          if(request.status==200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //not yet done - no action reqd
  };
  //capture the response and store it in a variable
  
  //render the variable in correct span
  
    
};