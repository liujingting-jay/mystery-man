console.log('进入ajax.js');
console.log('校验基本的对象导入', axios, Qs);
// 自定义对象，方便后面的js使用
var ljt = {
  // 访问后端地址
  serviceBaseUrl: 'https://huhuiyu.cn/teach-ajax-demo',
  // 保存tokenKey,不仅可以保存字符串，还可以是function，
  tokenKey: 'top.ljt.token',
  //method请求的方式(post,get)
  // url,服务器api的path
  // data，发送给服务器的数据
  // callback 是应答回来之后要执行的function
  ajax: function (method, url, data, callback) {
    console.log('ajax请求');
    var promise = axios({
      method: method,
      url: ljt.serviceBaseUrl + url,
      data: Qs.stringify(data, { allowDots: true }),
      headers: {
        token: localStorage.getItem(ljt.tokenKey),
      },
    });
    promise.then(function (resp) {
      if (resp.data.token) {
        localStorage.setItem(ljt.tokenKey, resp.data.token);
      }
      callback(resp.data);
    });
  },
};
