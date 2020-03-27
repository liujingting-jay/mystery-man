console.log('执行自我介绍zwjs.js');
var mystery = document.getElementById('mystery');
var shouye = document.getElementById('shouye');
var guanyu = document.getElementById('guanyu');
var lianxi = document.getElementById('lianxi');
var ym01 = document.getElementById('ym01');
var ym02 = document.getElementById('ym02');
var ym03 = document.getElementById('ym03');
var ym04 = document.getElementById('ym04');
var in01 = document.getElementById('in01');
var in02 = document.getElementById('in02');
var in03 = document.getElementById('in03');
var in04 = document.getElementById('in04');
var btn=document.getElementById('btn')
console.log(mystery, shouye, guanyu, lianxi,ym01,ym02,ym03,ym04,in01,in02,in03,in04,btn);

// ==============用变量记住当前显示的是哪一个页面================
//页面刚开始是页面一
var nowym = ym01;

mystery.addEventListener('click', function() {
  nowym.setAttribute('class', 'move-out');
  ym01.setAttribute('class', 'move-in');
  nowym = ym01;
});

shouye.addEventListener('click', function() {
  nowym.setAttribute('class', 'move-out');
  ym02.setAttribute('class', 'move-in');
  nowym = ym02;
});

guanyu.addEventListener('click', function() {
  nowym.setAttribute('class', 'move-out');
  ym03.setAttribute('class', 'move-in');
  nowym = ym03;
});

lianxi.addEventListener('click', function() {
  nowym.setAttribute('class', 'move-out');
  ym04.setAttribute('class', 'move-in');
  nowym = ym04;
});

btn.addEventListener('click',function(){
  var xm = in01.value;
  var dh = in02.value;
  var yx = in03.value;
  var ly = in04.value;
  console.log(xm,dh,yx,ly);
  if (xm.length < 2) {
    sperr.innerHTML = '姓名不能少于2个字符';
    sperr.setAttribute('class','z07');
    return;
  }
  if (dh.length < 11) {
    sperr.innerHTML = '电话不能少于11个字符';
    sperr.setAttribute('class','z07');
    return;
  }
  if (yx.length < 10) {
    sperr.innerHTML = '邮箱不能少于10个字符';
    sperr.setAttribute('class','z07');
    return;
  }
  if (ly.length < 15) {
    sperr.innerHTML = '邮箱不能少于15个字符';
    sperr.setAttribute('class','z07');
    return;
  }
  sperr.innerHTML = '您已' + xm + '发送成功';
  sperr.setAttribute('class','z07');
})
