console.log('执行zy17.js');
var inInfo = document.getElementById('inInfo');
var in01 = document.getElementById('in01');
var in02 = document.getElementById('in02');
var in03 = document.getElementById('in03');
var in04 = document.getElementById('in04');
var btn = document.getElementById('btn');
var error = document.getElementById('error');
var error02 = document.getElementById('error02');
var error03 = document.getElementById('error03');
var error04 = document.getElementById('error04');
console.log(in01, in02, in03, in04, inInfo, btn, error);
btn.addEventListener('click', function() {
  var In01 = in01.value.replace(/\s/g, '');
  if (In01.length < 11) {
    inInfo.setAttribute('class', 'section input cw');
    error.innerHTML = '电话号码不能小于11位';
    error.setAttribute('class', 'ys03');
    in01.setAttribute('class', 'cw section input');
    in01.focus();
    return;
  }
  error.innerHTML = '';

  var In02 = in02.value.replace(/\s/g, '');
  if (In02.length < 8) {
    error02.innerHTML = '密码不能少于8位';
    error02.setAttribute('class', 'ys03');
    in02.setAttribute('class', 'cw section input');
    in02.focus();
    return;
  } else if (In02.length > 12) {
    error02.innerHTML = '密码大于12';
    error02.setAttribute('class', 'ys03');
    in02.setAttribute('class', 'cw section input');
    in02.focus();
    return;
  } else {
    error02.innerHTML = '';
  }

  var In03 = in03.value.replace(/\s/g, '');
  if (In03.length != In02.length) {
    error03.innerHTML = '密码要和之前一样';
    error03.setAttribute('class', 'ys03');
    in03.setAttribute('class', 'cw section input');
    in03.focus();
    return;
  }
  error03.innerHTML = '';

  var In04 = in04.value.replace(/\s/g, '');
  if (In04.length < 2) {
    error04.innerHTML = '用户名不能小于2';
    error04.setAttribute('class', 'ys03');
    in04.setAttribute('class', 'cw section input');
    in04.focus();
    return;
  }
  error05.innerHTML = '恭喜' + in04.value + '注册成功';
  error05.setAttribute('class', 'ys03');
});
