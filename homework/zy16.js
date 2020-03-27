console.log('执行zy1.js');
var in01 = document.getElementById('in01');
var in02 = document.getElementById('in02');
var btn = document.getElementById('btn');
var cw = document.getElementById('cw');
console.log(in01, in02, btn, cw);

btn.addEventListener('click', function() {
  // 未去掉空白字符
  var bd01 = in01.value; //值1 获取表单元素值
  var bd02 = in02.value; //值2
  // 检查
  console.log('未去掉空白字符的值：',bd01, bd02, bd01.length, bd02.length);
  // 去掉空白字符
  bd01 = bd01.replace(/\s*/g, '');
  bd02 = bd02.replace(/\s*/g, '');
  // 检查
  console.log('去掉空白字符之后的值：', bd01, bd02, bd01.length, bd02.length);
  // 没有第一个值输入就中断执行并显示错误提示
  if (bd01.length == 0) {
    cw.innerHTML = cw.innerHTML + '第一个框没有输入有效的内容<br>';
    // 页面元素.focus()表示元素获取焦点
    in01.focus();
    return;
  }
  // 没有第二个值输入就中断执行并显示错误提示
  if (bd02.length == 0) {
    cw.innerHTML = cw.innerHTML + '第二个框没有输入有效的内容<br>';
    // 页面元素.focus()表示元素获取焦点
    in02.focus();
    return;
  }
  //逻辑的表达式只有两个结果，true,false，非常重要！！！！
  //判断两个值的大小
  cw.innerHTML = cw.innerHTML + '大于的判断结果' + (bd01 > bd02) + '<br>';
  cw.innerHTML = cw.innerHTML + '小于的判断结果' + (bd01 < bd02) + '<br>';
  cw.innerHTML = cw.innerHTML + '大于或者等于的判断结果' + (bd01 >= bd02) + '<br>';
  cw.innerHTML = cw.innerHTML + '小于或者等于的判断结果' + (bd01 <= bd02) + '<br>';
  //！是not的意思 不相等
  cw.innerHTML = cw.innerHTML + '不相等的判断结果' + (bd01 != bd02) + '<br>';
  cw.innerHTML = cw.innerHTML + '相等的判断结果' + (bd01 == bd02) + '<br>';
  //判断长度
  cw.innerHTML = cw.innerHTML + '值1比值2长' + (bd01.length > bd02.length) + '<br>';
  cw.innerHTML = cw.innerHTML + '值1比值2短' + (bd01.length < bd02.length) + '<br>';
  cw.innerHTML = cw.innerHTML + '值1和值2一样长' + (bd01.length == bd02.length) + '<br>';
});
