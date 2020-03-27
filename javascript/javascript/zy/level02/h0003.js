console.log('执行h0003.js');
// 获取元素
var txtUsername = document.getElementById('txtUsername');
var btnOk = document.getElementById('btnOk');
var btnOk2 = document.getElementById('btnOk2');
var btnOk3 = document.getElementById('btnOk3');
var spInfo = document.getElementById('spInfo');
console.log(txtUsername, btnOk, btnOk2, btnOk3, spInfo);
// 获取元素属性 元素.getAttribute('属性名称');
var attr = txtUsername.getAttribute('id');
console.log(attr);
attr = txtUsername.getAttribute('placeholder');
console.log(attr);
attr = txtUsername.getAttribute('class');
console.log('class', attr);
// 判断输入是不是8-20
btnOk.addEventListener('click', function() {
  console.log('确定按钮点击');
  var username = txtUsername.value;
  username = username.replace(/\s/g, '');
  console.log('用户名', username);
  if (username.length < 8) {
    spInfo.innerHTML = '长度不能小于8';
    txtUsername.focus();
    return;
  }
  if (username.length > 20) {
    spInfo.innerHTML = '长度不能大于20';
    txtUsername.focus();
    return;
  }
});

btnOk2.addEventListener('click', function() {
  console.log('确认2点击');
  username = txtUsername.value.replace(/\s/g, '');
  // 逻辑的或者 || 两根竖线表示
  // a || b 只要一个为true，结果就是true
  if (username.length < 8 || username.length > 20) {
    spInfo.innerHTML = '长度要在8-20之间';
    txtUsername.focus();
    return;
  }
  spInfo.innerHTML = '';
});

btnOk3.addEventListener('click', function() {
  var username = txtUsername.value.replace(/\s/g, '');
  // if else if else这个是阶梯判断
  //if(逻辑表达式){ 逻辑表达式1为真要执行的代码 }
  // else if(逻辑表达式) {逻辑表达式2为真要执行的代码}
  // ... =========else if可以写很多个==============
  //else { 所有上面的表达式都不为真就执行这里面的代码 }
  // 当长度小于8，就执行里面的代码，后面的就被忽视掉了，如果大于20，进入第二支判断，就会执行第二支代码，其他的被忽略
  // 阶梯判断是从上到下依次判断，任何一级判断为true，后面都不执行了
  if (username.length < 8) {
    spInfo.innerHTML = '长度小于8';
    txtUsername.focus();
  } else if (username.length > 20) {
    spInfo.innerHTML = '长度大于20';
    txtUsername.focus();
  } else {
    spInfo.innerHTML = '';
  }
});

// 切换文本框特效
var divInput = document.getElementById('divInput');
var divStyle = document.getElementById('divStyle');
var txtNum = document.getElementById('txtNum');
var spNum = document.getElementById('spNum');
var count = 0;
console.log(divInput, divStyle, count, txtNum, spNum);
btnStyle.addEventListener('click', function() {
  console.log('切换样式');
  count = count + 1;
  if (count % 2 == 1) {
    divInput.setAttribute('class', 'form-input error');
  } else {
    divInput.setAttribute('class', 'form-input');
  }

  // ====================================================
  var num = txtNum.value.replace(/\s/g, '');
  console.log('输入的数是', num);
  var fnum = parseFloat(num); //判断是不是数
  var inum = parseInt(num); //转换成整数
  console.log(fnum, inum);
  // 输入的是数且转换成小数的结果和整数的结果一样才是整数输入
  if (isNaN(fnum)) {
    spNum.innerHTML = '奇怪的输入又来了';
    return;
  }
  spNum.innerHTML = '';

  // 可以判断电话号码
  if (fnum == inum) {
    spNum.innerHTML = inum + '是整数';
    //区间判断 && 100<=inum<=200
    if (inum >= 100 && inum <= 200) {
      console.log((spNum.innerHTML = '奇怪的整数出现了'));
    }
  } else {
    spNum.innerHTML = fnum + '是小数';
  }
});
