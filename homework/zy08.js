console.log ('执行zy08.js');
// 点击动画效果
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');
var s5 = document.getElementById('s5');
var dh = document.getElementById('dh');
s1.addEventListener('click', function() {
  dh.setAttribute('class', 'myani01');
  // 等动画完成（比如动画是1秒）之后，去掉class的值，恢复到默认的状态
  // setTimeout是延时要执行的代码，第二个参数是延时的毫秒数
  setTimeout(function(){
    dh.setAttribute('class','')
  },5000)
});
s2.addEventListener('click', function() {
  dh.setAttribute('class', 'animated hinge');
  setTimeout(function(){
    dh.setAttribute('class','')
  },2000)
});
s3.addEventListener('click', function() {
  dh.setAttribute('class', 'myani02');
  setTimeout(function(){
    dh.setAttribute('class','')
  },5000)
});
s4.addEventListener('click', function() {
  dh.setAttribute('class', 'myani03');
  setTimeout(function(){
    dh.setAttribute('class','')
  },5000)
});
s5.addEventListener('click', function() {
  dh.setAttribute('class', 'animated rollOut');

  setTimeout(function(){
    dh.setAttribute('class','')
  },1000)
});


