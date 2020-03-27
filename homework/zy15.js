console.log('执行zy15.js');
var xhx = document.getElementById('xhx');
var nav01 = document.getElementById('nav01');
var nav02 = document.getElementById('nav02');
var nav03 = document.getElementById('nav03');
var nav04 = document.getElementById('nav04');
var nav05 = document.getElementById('nav05');
var tp01 = document.getElementById('tp01'); //页面一
var tp02 = document.getElementById('tp02'); //页面二
var tp03 = document.getElementById('tp03'); //页面三
var tp04 = document.getElementById('tp04'); //页面四
var tp05 = document.getElementById('tp05'); //页面五

console.log(
  xhx,
  nav01,
  nav02,
  nav03,
  nav04,
  nav05,
  tp01,
  tp02,
  tp03,
  tp04,
  tp05
);

// ==============用变量记住当前显示的是哪一个页面================

var nowtp = tp01; //页面刚开始是页面一

// 导航栏的事件
nav01.addEventListener('click', function() {
  // 第一个就是把滑块移动0%
  // 元素的style可以修改任意样式，把left修改到0%
  xhx.style.left = '0%';
  nowtp.setAttribute('class', 'move-out');
  tp01.setAttribute('class', 'move-in');
  nowtp = tp01;
});

nav02.addEventListener('click', function() {
  xhx.style.left = '20%';
  // 切换页面动画 当前的页面套用出去的动画，页面二套用进来的动画
  nowtp.setAttribute('class', 'move-out');
  tp02.setAttribute('class', 'move-in');
  // 当页面一出去后，页面二就变成当前页面
  nowtp = tp02;
});

nav03.addEventListener('click', function() {
  xhx.style.left = '40%';
  nowtp.setAttribute('class', 'move-out');
  tp03.setAttribute('class', 'move-in');
  // 当页面二出去后，页面三就变成当前页面
  nowtp = tp03;
});

nav04.addEventListener('click', function() {
  xhx.style.left = '60%';
  nowtp.setAttribute('class', 'move-out');
  tp04.setAttribute('class', 'move-in');
  // 当页面三出去后，页面四就变成当前页面
  nowtp = tp04;
});

nav05.addEventListener('click', function() {
  xhx.style.left = '80%';
  nowtp.setAttribute('class', 'move-out');
  tp05.setAttribute('class', 'move-in');
  // 当页面四出去后，页面五就变成当前页面
  nowtp = tp05;
});
