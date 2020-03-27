console.log('执行zy10.js');
var txtInfo = document.getElementById('txtInfo');
var txtPwd = document.getElementById('txtPwd');
var txtInfo2 = document.getElementById('txtInfo2');
var cw = document.getElementById('cw');
var divInfo01 = document.getElementById('divInfo01');
var divInfo02 = document.getElementById('divInfo02');
divInfo01.addEventListener('click', function() {
  document.getElementById('cw').setAttribute('class', 'animated shake');
  setTimeout(function() {
    cw.setAttribute('class', '');
  }, 1000);
  var yhm = txtInfo.value;
  var mm = txtPwd.value;
  var nc = txtInfo2.value;
  console.log(yhm, mm, nc);
  if (yhm.length < 4) {
    cw.innerHTML = '用户名不能少于4个字符';
    cw.style.color = 'red';
    return;
  }
  if (mm.length < 6) {
    cw.innerHTML = '密码不能少于6个字符';
    cw.style.color = 'red';
    return;
  }
  if (nc.length < 2) {
    cw.innerHTML = '昵称不能少于2个字符';
    cw.style.color = 'red';
    return;
  }
  cw.innerHTML = '恭喜' + nc + '注册成功';
  cw.style.color = 'red';
});

divInfo02.addEventListener('click', function() {
  var qingchu = document.getElementById('txtInfo').value;
  var qingchu = document.getElementById('txtInfo2').value;
  var qingchu = document.getElementById('txtPwd').value;

  if (qingchu == qingchu) {
    document.getElementById('txtInfo').value = '';
    document.getElementById('txtInfo2').value = '';
    document.getElementById('txtPwd').value = '';
  }
});
