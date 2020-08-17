console.log('进入ajax.js');
console.log('校验基本的对象导入', axios, Qs);
// 自定义对象，方便后面的js使用
var ljt = {
  serviceBaseUrl: 'https://huhuiyu.cn/teach-ajax-demo',
  tokenKey: 'top.ljt.token',
  // method，请求的方式(post,get)
  // url，服务器api的path
  // data,发送给服务器的数据
  // callback是应答回来之后要执行的function
  ajax: function (url, data, callback, method) {
    console.log('ajax请求');
    //设置method默认为post
    method = method ? method : 'post';
    var promise = axios({
      method: method,
      url: ljt.serviceBaseUrl + url,
      data: Qs.stringify(data, { allowDots: true }),
      headers: {
        token: localStorage.getItem(ljt.tokenKey),
      },
    });
    // 请求回来的情况
    promise.then(function (resp) {
      if (resp.data.token) {
        localStorage.setItem(ljt.tokenKey, resp.data.token);
      }
      // 越权访问api的固定code是1000，只要看到这个值就表示需要登陆
      // if (resp.data.code == 1000) {
      //   location.href = '/ajax/ajax0004.html';
      //   return;
      // }
      callback(resp.data);
    });
    // 请求发生错误的情况
    promise.catch(function (error) {
      callback({
        code: 500,
        success: false,
        message: '请检查是否网络正常，稍后重试',
        error: error,
      });
    });
  },
  // 自动登录
  autoLogin: function (callback) {
    // callback就是自动登录完成之后要执行的function
    ljt.ajax(
      '/user/login',
      // 参数 需自动登录的名字密码
      {
        tbUser: { username: '1235', password: '123456' },
      },
      function (data) {
        if (data.success) {
          // 登陆成功就回调
          callback();
        } else {
          alert(data.message);
        }
      }
    );
  },
};
