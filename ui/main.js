console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main text');
element.innerHTML = 'GIRIZA';

//image movement
var img = document.getElementById('img');
img.onclick = function (){
    
    img.style.marginLeft ='100px';
}