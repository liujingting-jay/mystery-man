console.log('执行ajax0004.js');
var txtName = document.getElementById('txtName');
var txtPwd = document.getElementById('txtPwd');
var btnLogin = document.getElementById('btnLogin');
var divResult = document.getElementById('divResult');
var param = { tbUser: { password: '', username: '' } };
btnLogin.addEventListener('click', function () {
  param.tbUser.username = txtName.value;
  param.tbUser.password = txtPwd.value;
  ljt.ajax('post', '	/user/login', param, function (resp) {
    divResult.innerHTML = JSON.stringify(resp);
    // 提取服务器返回的用户信息
    if (resp.success) {
      console.log(resp.resultData.tbUser);
      // sessionStorage保存时间短，location storage保存时间长
      sessionStorage.setItem(
        'login-user',
        JSON.stringify(resp.resultData.tbUser)
      );
      location.href = 'ajax0005.html';
    }
  });
});
document.getElementById('btnZc').addEventListener('click', function () {
  location.href = 'ajax0003.html';
});
