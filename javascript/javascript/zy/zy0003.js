console.log('执行zy0003.js');
var txtNum = document.getElementById('txtNum');
var btnNum = document.getElementById('btnNum');
var spError = document.getElementById('spError');
// 确定按钮点击事件
btnNum.addEventListener('click', function() {
  console.log('确定点击事件');
  var num = txtNum.value;
  console.log('输入的手机号是' + num + '!');
  // 去掉头尾空格的方法
  num = num.replace(/(^\s*)|(\s*$)/g, '');
  console.log('去掉头尾空格之后的手机号：' + num + '!');
  if (num == '') {
    spError.innerHTML = '请输入电话号码';
    return;
  }
  spError.innerHTML = '';
  if (isNaN(num)) {
    spError.innerHTML = '请输入数字';
  }
  spError.innerHTML = '';
  // 判断整数
  var inum = parseInt(num);
  var fnum = parseFloat(num);
  if (inum != fnum) {
    spError.innerHTML = '请输入整数';
    return;
  }
  spError.innerHTML = '';
  // 判断是不是1开头的数
  if (inum >= 10000000000 && inum <= 20000000000) {
    spError.innerHTML = '你的电话是' + inum;
    return;
  }
  spError.innerHTML = '请输入1开头的11数';
});
