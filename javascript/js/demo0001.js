console.log('执行demo0001.js');
var myimg = document.getElementById('myimg');
myimg.setAttribute('src', './images/2.jpg');

setTimeout(function () {
  myimg.setAttribute('src', './images/4.jpg');
},5000);
