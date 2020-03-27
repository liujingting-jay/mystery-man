console.log('执行zy0001.js');

var btnIf = document.getElementById('btnIf');
var spIf = document.getElementById('spIf');
var txtIf = document.getElementById('txtIf');
console.log(btnIf, spIf, btnIf.innerHTML);
var count = 0;
// 双引号才是字符串
// title 鼠标放上去，增加提示文本
// 动态修改属性
btnIf.setAttribute('title', '动态修改属性-title');
txtIf.setAttribute('type', 'password');

btnIf.addEventListener('click', function() {
  // count++，count+=1就是count = count+1;
  count++;
  console.log('点击按钮的动作');
  // if(逻辑表达式，只有真和假两种情况) return表示无条件进行
  // else{ //如果if的结果为假才会执行的代码}
  // % 取模运算，整除不尽余下的数
  // 100 % 3 = 1
  // ==是逻辑判断等值
  // 取模的结果一定是0-取模运算的第二值-1
  if (count % 2 == 1) {
    spIf.innerHTML = '奇数次点击' + count;
    spIf.setAttribute('class', 's1');
  } else {
    spIf.innerHTML = '偶数次点击' + count;
    spIf.setAttribute('class', 's2');
  }
});
// 如果count 是奇数次就显示奇数次点击，且class变成s1
// 否则就显示偶数次点击，且class变成s2

// =================================================
var txtNum = document.getElementById('txtNum');
var btnNum = document.getElementById('btnNum');

btnNum.addEventListener('click', function() {
  console.log(txtNum);
  // 获取txtNum的值
  var num = txtNum.value;
  console.log(num);
  //isNaN是is not a number,是判断参数是不是一个数
  // 不是数就返回真（true），否则返回假（false）
  if (isNaN(num)) {
    spIf.innerHTML = '输入的不是数';
    return;
  }
  console.log('继续判断是不是偶数。。。');
  // 转换为数
  num = parseFloat(num);
  if (num % 2 == 0) {
    spIf.innerHTML = num + '偶数';
  } else {
    spIf.innerHTML = num + '奇数';
  }
});
// 作业：以前=-*/%那个作业加上是不是数的判断
// 编写后期效果的界面