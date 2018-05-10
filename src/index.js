
require('./a.js');
require('./b.js');
require('src/less/index.less');
require('src/less/index2.css');
require('src/less/style.less');
console.log('我是index.js');
const greet = require('./greet.js');  
function bindButtonElementEvent(btnElement) {  
  btnElement.addEventListener('click', function () {  
      greet();  
  });  
}  
window.bindButtonElementEvent = bindButtonElementEvent;
const img = document.createElement('img');
img.setAttribute("class","img1");
img.style.cssText = "width:400px;height:200px;";
img.src = require('./images/b_flight1.jpg');
setTimeout(function(){
  document.getElementsByClassName('div2')[0].appendChild(img);
},10);
img.onclick = () => {
  img.style.animation = "mymove 5s linear 2";
}