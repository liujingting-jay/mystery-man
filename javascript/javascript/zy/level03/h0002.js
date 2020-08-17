console.log('执行h0002.js');
// 通过循环产生颜色效果
//155-255 rgb(155,0,0)
var div01 = document.getElementById('div01');
for (i = 55; i <= 255; i = i + 10) {
  // console.log(i);
  // 1:创建div
  var elediv = document.createElement('div');
  // 2:计算颜色
  var color = 'rgb(' + i + ',0,0)';
  // console.log(color)
  // 3:设置背景颜色
  elediv.style.backgroundColor = color;
  // 4:显示的内容就是颜色值
  elediv.append(color);
  // 5:添加到页面
  div01.append(elediv);
}

// 随机动画
var animates = [
  'bounceIn',
  'flash',
  'shake',
  'zoomIn',
  'rotateIn',
  'bounceOut',
];
console.log(animates);
var div02 = document.getElementById('div02');
var index = Math.floor(Math.random() * animates.length); //随机索引
console.log(index);
div02.setAttribute('class', 'animated ' + animates[index]);
// 无限循环的更新动画
setInterval(function () {
  var index = Math.floor(Math.random() * animates.length); //随机索引
  console.log(index);
  div02.setAttribute('class', 'animated ' + animates[index]);
  setTimeout(function () {
    div02.setAttribute('class', '');
  }, 1500);
}, 2000);

// 动态获取页面元素
var divs = document.querySelectorAll('#div03>div');
console.log(divs);
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
  console.log(div);
  index = Math.floor(Math.random() * animates.length);
  div.setAttribute('class', 'animated infinite ' + animates[index]);
}
// 动态修改class的正确姿态
var div04 = document.getElementById('div04');
var btnAdd = document.getElementById('btnAdd');
var btnRemove = document.getElementById('btnRemove');
btnAdd.addEventListener('click', function () {
  // 动态添加class的值，元素classList
  div04.classList.add('class01', 'animated', 'flash', 'infinite');
});
btnRemove.addEventListener('click', function () {
  div04.classList.remove('class01', 'animated', 'flash', 'infinite');
  console.log(div04);
});
// 作业1：按照上课的颜色特效完成五个不同的色系 （自己随意定制颜色）的效果
// 作业2：把上课动画效果补齐