console.log('进入index.js');
// 显示应答的div
var divResp = document.getElementById('divResp');

var divThree = document.getElementById('divThree');
//单一的echo参数测试
var txt_echo = document.getElementById('txt_echo');
var btnOne = document.getElementById('btnOne');
btnOne.addEventListener('click', function () {
  var param = { echo: txt_echo.value };
  console.log(param);
  // 发起ajax请求,第一个参数就是文档最上面请求方式
  // 第二个参数就是文档中的path
  // 第三个参数就是提交数据的json
  // 第四个参数就是一个function,请求回来之后会执行，且吧应答结果放在resp中
  ljt.ajax('post', '/test/echoOne', param, function (resp) {
    console.log(resp);
    divResp.innerHTML = JSON.stringify(resp);
    // 获取应答中的数据
    var divOne = document.getElementById('divOne');
    divOne.innerHTML = resp.message + resp.resultData.random;
  });
});

// 单一对象参数测试
var txt_pageNumber = document.getElementById('txt_pageNumber');
var txt_pageSize = document.getElementById('txt_pageSize');
var btnTwo = document.getElementById('btnTwo');
btnTwo.addEventListener('click', function () {
  var param = {
    page: { pageNumber: txt_pageNumber.value, pageSize: txt_pageSize.value },
  };
  console.log(param);
  ljt.ajax('post', '/test/echoTwo', param, function (resp) {
    // 应答结果固定值：code,message,resultData,success,token
    // 文档里面有说明：resultData比较特殊，是应答回来的数据
    console.log(resp);
    divResp.innerHTML = JSON.stringify(resp);
    var divTwo = document.getElementById('divTwo');
    divTwo.innerHTML = '分页页码' + resp.resultData.page.pageNumber;
  });
});

// 多参数测试
var echo = document.getElementById('echo');
var pageNumber = document.getElementById('pageNumber');
var pageSize = document.getElementById('pageSize');
var nickname = document.getElementById('nickname');
var username = document.getElementById('username');
var btnThree = document.getElementById('btnThree');
btnThree.addEventListener('click', function () {
  var param = {
    echo: echo.value,
    page: { pageNumber: pageNumber.value, pageSize: pageSize.value },
    tbUser: { nickname: nickname.value, username: username.value },
  };
  console.log(param);
  ljt.ajax('post', '/test/echoThree', param, function (resp) {
    console.log(resp);
    divResp.innerHTML = JSON.stringify(resp);
  });
});
// 作业一，把参数测试三的功能补全
// 作业二，把登录相关功能全部美化！！！
