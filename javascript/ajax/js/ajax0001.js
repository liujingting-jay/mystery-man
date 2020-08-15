console.log('进入ajax0001.js');
//校验axios是否导入
console.log('axios/:', axios);
//校验Qs是否导入
console.log('Qs/:', Qs);
// 服务器api接口访问地址
var serviceBaseUrl = 'https://huhuiyu.cn/teach-ajax-demo';
// 本地保存token信息的key
var serviceTokenKey = 'service.token';

// 接口文档中的POST，GET表示接口访问的类型
// path 就是接口访问url地址
// axios 访问后端api接口 method参数就是接口访问类型
// headers用于传递Pramater Type为header的参数
var promise = axios({
  method: 'post',
  url: serviceBaseUrl + '/',
  headers: {
    token: localStorage.getItem(serviceTokenKey),
  },
});
// Promise对象如果正确应答回来会调用then方法
promise.then(function (resp) {
  // 服务器的应答数据在data属性中
  console.log(resp.data);
  // token是服务器追踪，一定要保存好
  // c6db8e44-a45b-40b2-bd78-f40f04388aa6
  // 如果服务器端有返回token，需要保存下来
  if (resp.data.token) {
    localStorage.setItem(serviceTokenKey, resp.data.token);
  }
});

// 一次完整的ajax请求
var txtEcho = document.getElementById('txtEcho');
var btnEcho = document.getElementById('btnEcho');
var spEcho = document.getElementById('spEcho');
btnEcho.addEventListener('click', function () {
  promise = axios({
    method: 'post',
    url: serviceBaseUrl + '/',
    headers: {
      token: localStorage.getItem(serviceTokenKey),
    },
    data: 'echo=' + txtEcho.value,
  });
  promise.then(function (resp) {
    if (resp.data.token) {
      localStorage.setItem(serviceTokenKey, resp.data.token);
    }
    // JSON.stringify是将json对象转换成字符串
    spEcho.innerHTML = JSON.stringify(resp.data);
  });
});

