console.log('执行h0005.js');
var btnOk = document.getElementById('btnOk');
var ah01 = document.getElementById('ah01');
var ah02 = document.getElementById('ah02');
var ah03 = document.getElementById('ah03');
var ah04 = document.getElementById('ah04');
var spInfo = document.getElementById('spInfo');
var chkXy = document.getElementById('chkXy');
console.log(ah01, ah02, ah03, ah04, btnOk, spInfo, chkXy);

btnOk.addEventListener('click', function() {
  console.log('点击确认按钮');
  var ah = '';
  if (ah01.checked) {
    ah += ah01.value + ',';
  }
  if (ah02.checked) {
    ah += ah02.value + ',';
  }
  if (ah03.checked) {
    ah += ah03.value + ',';
  }
  if (ah04.checked) {
    ah += ah04.value + ',';
  }
  if (ah != '你的爱好有：') {
    //substr是字符串对象的特有方法，获取字符串的一部分
    //substr(开始索引，长度)
    ah = ah.substr(0, ah.length - 1);
  }
  spInfo.innerHTML = ah;
});

//================================================
var xb = document.getElementById('xb');
xb.addEventListener('click', function() {
  spInfo.innerHTML = '性别是' + xb.value;
});
