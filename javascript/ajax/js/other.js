console.log('执行oher.js');
// 查询效果===========================
// 查询按钮
var btnQuery = document.getElementById('btnQuery');
// 显示加载的div
var divLoading = document.getElementById('divLoading');
// 显示数据的div
var divEmployee = document.getElementById('divEmployee');
console.log('查询相关的页面元素', btnQuery, divLoading, divEmployee);

// 查询按钮点击事件
btnQuery.addEventListener('click', function () {
  // 切换按钮为不可用的样式
  btnQuery.classList.add('disabled');
  // 显示加载中的div
  divLoading.style.display = 'block';
  // 开始ajax调用后端服务
  ljt.ajax('post', '/employee/queryAll', {}, function (data) {
    //  后端应答回来后恢复状态
    btnQuery.classList.remove('disabled');
    divLoading.style.display = 'none';
    console.log(data);
    // 显示数据
    divEmployee.innerHTML = JSON.stringify(data);
    divEmployee.style.display = 'block';
    // none:不显示 ，block:块级元素显示（天生占满一整行），inline:非块级元素显示
    // inline-block:可以使用盒模型样式的非块级元素显示
  });
});

// 动态信息显示效果
var btnMessage = document.getElementById('btnMessage');
var divMessage = document.getElementById('divMessage');
console.log('动态信息效果', btnMessage, divMessage);
btnMessage.addEventListener('click', function () {
  ljt.ajax('post', '/user/login', {}, function (data) {
    // 内容修改成服务器应答信息
    divMessage.innerHTML = '<div>' + data.message + '</div>';
    // 处理动画
    divMessage.classList.add('message');
    setTimeout(function () {
      divMessage.classList.remove('message');
    }, 5000);
  });
});

// 表单校验效果
var txtName = document.getElementById('txtName');
var txtPwd = document.getElementById('txtPwd');
var btnValidate = document.getElementById('btnValidate');
var divName = document.getElementById('divName');
var divPwd = document.getElementById('divPwd');
console.log('表单校验', btnValidate, txtName, txtPwd, divName, divPwd);

btnValidate.addEventListener('click', function () {
  // 重置错误状态
  divName.classList.remove('error');
  divPwd.classList.remove('error');
  document.querySelector('#divName>i').style.visibility = 'hidden';
  document.querySelector('#divPwd>i').style.visibility = 'hidden';
  var name = txtName.value;
  var divNameError = document.getElementById('divNameError');
  var divPwdError = document.getElementById('divPwdError');
  divNameError.style.visibility = 'hidden';
  divPwdError.style.visibility = 'hidden';
  // 必须填写
  if (!name) {
    document.querySelector('#divName>i').style.visibility = 'visible';
    divNameError.style.visibility = 'visible';
    divName.classList.add('error');
    txtName.focus();
    return;
  }
  // 密码校验
  if (!txtPwd.value) {
    document.querySelector('#divPwd>i').style.visibility = 'visible';
    divPwd.classList.add('error');
    divPwdError.style.visibility = 'visible';
    txtPwd.focus();
    return;
  }
});

// 作业：完成登录校验效果。完成登陆返回的错误信息提示动画效果
// 附加作业 注册的校验的服务器错误的信息动画提示