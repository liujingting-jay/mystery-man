console.log('进入h0004.js');
var txtPwd = document.getElementById('txtPwd');
var divInfo = document.getElementById('divInfo');
var btnOk = document.getElementById('btnOk');
//radio 一组互斥
var rdoYue = document.getElementById('rdoYue');
var rdoNian = document.getElementById('rdoNian');
var rdoYJ = document.getElementById('rdoYJ');
console.log(txtPwd, divInfo, btnOk, rdoYue, rdoNian, rdoYJ);
btnOk.addEventListener('click', function() {
  console.log('点击确定事件');
  divInfo.innerHTML = '输入的密码' + txtPwd.value;
  //判断开卡的模式（radio互斥效果的判断）
  var mode = '';
  //rdoYue.checked属性只有真假二态，选中时为true
  // 由于互斥 三个不可能都选中，所以可以写好多if
  if (rdoYue.checked) {
    mode = rdoYue.value;
  }
  if (rdoNian.checked) {
    mode = rdoNian.value;
  }
  if (rdoYJ.checked) {
    mode = rdoYJ.value;
  }
  divInfo.innerHTML += '<br>开卡模式是：' + mode;
});

var chkShow = document.getElementById('chkShow');
var spShow = document.getElementById('spShow');
chkShow.addEventListener('click', function() {
  if (chkShow.checked) {
    // 如果是选中状态就显示spShow
    spShow.style.display = 'inline';
  } else {
    spShow.style.display = 'none';
  }
});

// 设置一个注册的表单！！！要求用到上课所有表单元素
// 带上一些自己觉得合理的校验
