console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main text');
element.innerHTML = 'GIRIZA';

//image movement
var madi = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
   marginLeft = marginLeft + 10;
   madi.style.marginLeft = marginLeft + 'px';
}

madi.onclick = function (){
    var interval =setInterval(moveRight,100);

};