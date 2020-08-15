console.log('执行ajax0003.js');
var txtName = document.getElementById('txtName');
var txtPwd = document.getElementById('txtPwd');
var txtNicheng = document.getElementById('txtNicheng');
var btnReg = document.getElementById('btnReg');
var divResult = document.getElementById('divResult');

var param = { tbUser: { nickname: '1', password: '2', username: '3' } };
console.log(Qs.stringify(param, { allowDots: true }));
btnReg.addEventListener('click', function () {
  // 收集后端需要的信息
  param.tbUser.nickname = txtNicheng.value;
  param.tbUser.password = txtPwd.value;
  param.tbUser.username = txtName.value;
  console.log(param);
  console.log(Qs.stringify(param, { allowDots: true }));
  // ajax调用后端api注册
  ljt.ajax('post', '/user/reg', param, function (resp) {
    divResult.innerHTML = JSON.stringify(resp);
  });
});
document.getElementById('btnLogin').addEventListener('click', function () {
  location.href = 'ajax0004.html';
});
