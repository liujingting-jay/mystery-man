console.log('执行zy05.js');
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
  document.getElementById('spTime').innerHTML =
    year +
    '年' +
    month +
    '月' +
    day +
    '日' +
    hour +
    '时' +
    minute +
    '分' +
    second +
    '秒';
}, 1000);

setInterval(function() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  document.getElementById('2').innerHTML =
    year + '年' + month + '月' + day + '日' + hour + '时' + minute + '分';
}, 1000);
