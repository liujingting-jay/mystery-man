console.log('进入h0006.js');
// =======================================================================
var txtInfo = document.getElementById('txtInfo');
var btnSave = document.getElementById('btnSave');
var divInfo = document.getElementById('divInfo');
var btnLoad = document.getElementById('btnLoad');
var btnDel = document.getElementById('btnDel');
console.log(txtInfo, btnSave, divInfo, btnLoad, btnDel);
btnSave.addEventListener('click', function () {
  console.log('开始保存本地信息');
  //localStorage本地储存
  // 将txtInfo的输入值用info这个名称保存在本地储存中
  localStorage.setItem('info', txtInfo.value);
  divInfo.innerHTML = '保存本地储存完成';
});

btnLoad.addEventListener('click', function () {
  console.log('开始加载本地储存信息');
  //获取本地储存中叫info的对应数据
  var info = localStorage.getItem('info');
  txtInfo.value = info;
  divInfo.innerHTML = '加载本地储存完成';
});

btnDel.addEventListener('click', function () {
  console.log('开始删除本地信息');
  // 删除本地储存中叫info的对应数据
  localStorage.removeItem('info');
  divInfo.innerHTML = '删除本地储存完成';
});

// session的本地储存
var txtSession = document.getElementById('txtSession');
var btnLoadSession = document.getElementById('btnLoadSession');
var btnDelSession = document.getElementById('btnDelSession');
var btnSaveSession = document.getElementById('btnSaveSession');
console.log(
  txtSession,
  btnLoadSession,
  btnDelSession,
  btnSaveSession,
  btnSaveSession
);

btnSaveSession.addEventListener('click', function () {
  sessionStorage.setItem('sinfo', txtSession.value);
  divInfo.innerHTML = '保存session数据成功';
});

btnLoadSession.addEventListener('click', function () {
  txtSession.value = sessionStorage.getItem('sinfo');
  divInfo.innerHTML = '加载session数据成功';
});

btnDelSession.addEventListener('click', function () {
  sessionStorage.removeItem('sinfo');
  divInfo.innerHTML = '删除session数据成功';
});

// 页面跳转

var btnLink = document.getElementById('btnLink');
btnLink.addEventListener('click', function () {
  // 跳转页面
  location = 'h0006-1.html';
});

var alink = document.getElementById('alink');
alink.addEventListener('click', function () {
  divInfo.innerHTML = '页面会在5秒后跳转';
  setTimeout(function () {
    location = 'https://huhuiyu.top';
  }, 5000);
});

var btnTab = document.getElementById('btnTab');
btnTab.addEventListener('click', function () {
  window.open('https://huhuiyu.top');
});

// localStorage拥有保存数据的能力
// 保存：setItem（名称，值）
// 读取：变量名 = getItem（名称）
// 删除：removeItem('名称')
