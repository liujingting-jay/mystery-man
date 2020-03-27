console.log('执行zy13.js');
var txtInfo = document.getElementById('txtInfo');
var txtInfo01 = document.getElementById('txtInfo01');
var txtInfo02 = document.getElementById('txtInfo02');
var txtInfo03 = document.getElementById('txtInfo03');
var txtInfo04 = document.getElementById('txtInfo04');
var txtInfo05 = document.getElementById('txtInfo05');
var txtInfo06 = document.getElementById('txtInfo06');
var txtInfo07 = document.getElementById('txtInfo07');
var txtInfo08 = document.getElementById('txtInfo08');
var txtInfo09 = document.getElementById('txtInfo09');
var jieguo = document.getElementById('jieguo');
var jieguo01 = document.getElementById('jieguo01');
var jieguo02 = document.getElementById('jieguo02');
var jieguo03 = document.getElementById('jieguo03');
var jieguo04 = document.getElementById('jieguo04');
var btnInfo = document.getElementById('btnInfo');

btnInfo.addEventListener('click', function() {
  var num1 = parseFloat(txtInfo.value);
  var num2 = parseFloat(txtInfo01.value);
  var num3 = parseFloat(txtInfo02.value);
  var num4 = parseFloat(txtInfo03.value);
  var num5 = parseFloat(txtInfo04.value);
  var num6 = parseFloat(txtInfo05.value);
  var num7 = parseFloat(txtInfo06.value);
  var num8 = parseFloat(txtInfo07.value);
  var num9 = parseFloat(txtInfo08.value);
  var num10 = parseFloat(txtInfo09.value);
  if (isNaN(num1)) {
    spInfo.innerHTML = '加法的第一个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num2)) {
    spInfo.innerHTML = '加法的第二个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num3)) {
    spInfo.innerHTML = '减法的第一个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num4)) {
    spInfo.innerHTML = '减法的第二个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num5)) {
    spInfo.innerHTML = '乘法的第一个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num6)) {
    spInfo.innerHTML = '乘法的第二个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num7)) {
    spInfo.innerHTML = '除法的第一个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num8)) {
    spInfo.innerHTML = '除法的第二个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num9)) {
    spInfo.innerHTML = '取模的第一个输入的不是数，不能计算';
    return;
  }
  if (isNaN(num10)) {
    spInfo.innerHTML = '取模的第二个输入的不是数，不能计算';
    return;
  }
  spInfo.innerHTML = '';
  console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
  jieguo.innerHTML = parseFloat(txtInfo.value) + parseFloat(txtInfo01.value);
  jieguo01.innerHTML =
    parseFloat(txtInfo02.value) - parseFloat(txtInfo03.value);
  jieguo02.innerHTML =
    parseFloat(txtInfo04.value) * parseFloat(txtInfo05.value);
  jieguo03.innerHTML =
    parseFloat(txtInfo06.value) / parseFloat(txtInfo07.value);
  jieguo04.innerHTML =
    parseFloat(txtInfo08.value) % parseFloat(txtInfo09.value);
  //isNaN是is not a number,是判断参数是不是一个数
  // 不是数就返回真（true），否则返回假（false）
});
