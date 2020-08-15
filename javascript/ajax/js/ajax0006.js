console.log('执行ajax0006.js');
var btnGetUserInfo = document.getElementById('btnGetUserInfo');
var divResp = document.getElementById('divResp');
btnGetUserInfo.addEventListener('click', function () {
  ljt.ajax('post', '	/user/getUserInfo', {}, function (resp) {
    console.log(resp);
    divResp.innerHTML = JSON.stringify(resp);
  });
});
