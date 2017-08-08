//Counter Code
var button = document.getElementById('counter');
var counter = 0;

 button.onclick = function() {
  
  //create a request to counter endpoint
  
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
      if(request.readyState == XMLHttpRequest.DONE)
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
  
  //make  a request
 request.open('GET','http://girijaiyer1996.imad.hasura-app.io/counter',true);
 request.send(null);
  
    


//submit name
var nameInput = doc.getElementById('name');
var name = nameInput.value;
var submit = doc.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to the server
    
    //capture a list of names and render it as a list
    var names = ['name1','name2','name3'];
    var list = '';
    for(i=0;i<names.length;i++)
    {
        list+='<li>' + names[i] +'</li';
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
        
    }
    
};