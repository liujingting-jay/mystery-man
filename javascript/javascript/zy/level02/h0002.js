console.log('执行h000.js');

/* 
 逻辑表达式的计算结果
 > < == >= <=
 对于两个文本框中输入的信息，结果放在div中
*/
// 第一步，获取页面相关元素
var info01 = document.getElementById('info01'); //第一个输入框
var info02 = document.getElementById('info02'); //第二个给输入框
var divResult = document.getElementById('divResult'); //错误信息
var btn = document.getElementById('btn'); //点击按钮
console.log(info01, info02, divResult, btn);
// 第二步，判断按钮点击动作
btn.addEventListener('click', function() {
  console.log('开始做判断');
  // 获取输入框输入的内容
  var val01 = info01.value; //第一个值
  var my = info02.value; //第二个值
  console.log('输入的值', val01, my, val01.length, my.length);
  // =为赋值
  // 显示书输入的值
  divResult.innerHTML = '第一个值是：' + val01 + '<br>';
  divResult.innerHTML = divResult.innerHTML + '第二个值是：' + my + '<br>';
  // 要有输入才能继续判断
  // 去掉空白字符再判断输入的情况  /\s*/g 表示任意的空白字符
  // replace(/\s*/g, '') 把任意的空白字符转为没有
  val01 = val01.replace(/\s*/g, '');
  my = my.replace(/\s*/g, '');
  console.log('去掉空格之后的值：', val01, my, val01.length, my.length);
  // 没有第一个值输入就中断执行并显示错误提示
  if (val01.length == 0) {
    divResult.innerHTML =
      divResult.innerHTML + '第一个信息没有输入有效的内容<br>';
    // 页面元素.focus()表示元素获取焦点
    info01.focus();
    return;
  }
  // 没有第二个值输入就中断执行并显示错误提示
  if (my.length == 0) {
    divResult.innerHTML =
      divResult.innerHTML + '第二个信息没有输入有效的内容<br>';
    // 页面元素.focus()表示元素获取焦点
    info02.focus();
    return;
  }
  // 大于的判断 逻辑的表达式只有两个结果，true,false，非常重要
  // a=b 表示让a的值为b a=100表示a变成100
  // a==b 表示判断a是否和b相等 a==100 表示a的值如果是100返回true,否则false
  divResult.innerHTML =
    divResult.innerHTML + '大于的判断结果' + (val01 > my) + '<br>';
  divResult.innerHTML =
    divResult.innerHTML + '大于或者等于的判断结果' + (val01 >= my) + '<br>';
  divResult.innerHTML =
    // a+=b; 就是a=a+b; ！是not的意思
    // 不相等的两种写法
    divResult.innerHTML += '不相等的测试结果' + (val01 != my) + '<br>';
    // !写括号前面也接受
  divResult.innerHTML += '取反操作不相等测试的结果' + !(val01 == my) + '<br>';
});
// 作业1 完成剩下的逻辑判断表达式的测试方式  判断文本框中输入的信息长度哪一个更长
// >大于 <小于 >=大于或者等于 <=小于或者等于 !=不相等 