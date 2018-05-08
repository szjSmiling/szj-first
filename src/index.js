
require('./a.js');
require('./b.js');
require('./less/style.less');
require('./less/index.less');
console.log('我是index.js');
const greet = require('./greet.js');  
function bindButtonElementEvent(btnElement) {  
  btnElement.addEventListener('click', function () {  
      greet();  
  });  
}  
window.bindButtonElementEvent = bindButtonElementEvent;
const img = document.createElement('img');
img.style.cssText = "width:400px;height:200px;";
img.src = require('./images/b_flight1.jpg');
setTimeout(function(){
  document.getElementsByClassName('div2')[0].appendChild(img);
},100);