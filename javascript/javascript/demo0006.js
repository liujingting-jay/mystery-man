console.log('执行demo0006.js');
// 获取当前时间
// var 变量名=变量值; new Date()就是获取当前的时间
var now = new Date();
console.log(now);
// 获取时间的某一个部分
// 获取小时,分钟，秒数
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log('小时', hour);
console.log('分钟', minute);
console.log('秒', second);
// 年月日 月份是0-11 表示1-11月,所以要+1
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(year, month, day);

document.getElementById('spTime').innerHTML =
  hour + ':' + minute + ':' + second;

//反复间隔时间执行代码,第二个参数是间隔的毫秒，1000就是1秒
setInterval(function() {
  //  反复执行console.log(new Date());
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  document.getElementById('spTime').innerHTML =
    hour + ':' + minute + ':' + second;
}, 1000);
// 作业三：将时间显示成xxxx年xx月xx日 xx时xx分xx秒. 扩展作业思考：如果不显示秒，但是一分钟更新
