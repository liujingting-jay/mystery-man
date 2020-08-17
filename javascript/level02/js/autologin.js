console.log('自动登录的测试');

ljt.autoLogin(query);

function query() {
  console.log('自动登陆成功');
  ljt.ajax('/user/getUserInfo', {}, function (data) {
    console.log('登录信息', data);
  
  });
}
