console.log('进入h0001.js');
// 点击导航移动下方滑块
// 获取相关元素
var bar = document.getElementById('bar');
var nav01 = document.getElementById('nav01');
var nav02 = document.getElementById('nav02');
var nav03 = document.getElementById('nav03');
var page01 = document.getElementById('page01'); //页面一
var page02 = document.getElementById('page02'); //页面二
console.log(bar, nav01, nav02, nav03);

// ==============用变量记住当前显示的是哪一个页面================
var nowpage = page01; //页面开始的时候就是页面一

// 导航栏的事件
nav01.addEventListener('click', function() {
  // 第一个就是把滑块移动0%
  // 元素的style可以修改任意样式，把left修改到0%
  bar.style.left = '0%';
  // 通过元素的id来判断方向，如果当前的id比要切换的大，就是反方向切换动画
  var nowpageid = nowpage.getAttribute('id'); //拿回当前页面的id
  var dir = nowpageid > 'page01';
  console.log(nowpageid, 'page01', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    page01.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page01.setAttribute('class', 'move-in');
  }
  nowpage = page01;
});

nav02.addEventListener('click', function() {
  bar.style.left = '33.33333%';
  // 切换页面动画 当前的页面套用出去的动画，页面二套用进来的动画
  var nowpageid = nowpage.getAttribute('id'); //拿回当前页面的id
  var dir = nowpageid > 'page02';
  console.log(nowpageid, 'page02', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    page02.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page02.setAttribute('class', 'move-in');
  }

  // 当页面一出去后，页面二就变成当前页面
  nowpage = page02;
});

nav03.addEventListener('click', function() {
  bar.style.left = '66.66666%';
  var nowpageid = nowpage.getAttribute('id'); //拿回当前页面的id
  var dir = nowpageid > 'page03';
  console.log(nowpageid, 'page03', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    page0.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page03.setAttribute('class', 'move-in');
  }
  // 当页面一出去后，页面二就变成当前页面
  nowpage = page03;
});
