console.log('执行zy11.js');
// 白昼
// %取模运算奇偶判断白昼
// 单引号是字符串，没有单引号是变量名称，或着具体的某个数
var djcs = 1;
images.addEventListener('click', function() {
  djcs = djcs + 1;
  if (djcs % 2 == 0) {
    baizhou.setAttribute('class', 'bac02');
    return;
  }
  baizhou.setAttribute('class', 'bac01');
});

// 时间
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();

setInterval(function() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  document.getElementById('shijian01').innerHTML =
    year + '年' + month + '月' + day + '日';
}, 1000);

setInterval(function() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  document.getElementById('shijian02').innerHTML =
    hour + ':' + minute + ':' + second;
}, 1000);

// 字幕
var divInfo01 = document.getElementById('divInfo01');
var divInfo02 = document.getElementById('divInfo02');
var zi = 'Good Good Study,Day Day UP!  ';
var zi02 =
  'Webpack是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。';
var index = 0;
var index2 = 0;
console.log(zi.length, zi02.length);

setInterval(function() {
  divInfo01.innerHTML = divInfo01.innerHTML + zi.charAt(index);
  index = index + 1;
  if (index == zi.length) {
    divInfo01.innerHTML = '';
    index = 0;
  }
}, 400);

setInterval(function() {
  divInfo02.innerHTML = divInfo02.innerHTML + zi02.charAt(index2);
  index2 = index2 + 1;
  if (index2 == zi02.length) {
    divInfo02.innerHTML = '';
    index2 = 0;
  }
}, 400);

// 赞
var count01 = 1314;
var count02 = 52;
document.getElementById('spInfo1').innerHTML = count01;
document.getElementById('spInfo2').innerHTML = count02;
document.getElementById('icon1').addEventListener('click', function() {
  count01 = count01 + 1;
  document.getElementById('spInfo1').innerHTML = count01;
});

document.getElementById('icon2').addEventListener('click', function() {
  count02 = count02 - 1;
  document.getElementById('spInfo2').innerHTML = count02;
});
