console.log('执行h0003.js');
var chXy = document.getElementById('chXy');
var btn01 = document.getElementById('btn01');
chXy.addEventListener('change', function () {
  if (chXy.checked) {
    btn01.classList.remove('btn-disable');
  } else {
    btn01.classList.add(' btn-danger');
  }
});

var chXy01 = document.getElementById('chXy01');
var btn02 = document.getElementById('btn02');
chXy01.addEventListener('change', function () {
  if (chXy01.checked) {
    btn02.setAttribute('class', 'btn btn-danger');
  } else {
    btn02.setAttribute('class', 'btn  btn-disable');
  }
});

// 选择器级联可以简化js工具
var btn03 = document.getElementById('btn03');
var divName = document.getElementById('divName');
// 通过选择器获取divName里面的input
// querySelector也是通过css获取元素，但最多只会返回一个
// querySelectorAll是返回一组
var txtName = document.querySelector('#divName input');
console.log(txtName);
btn03.addEventListener('click', function () {
  if (!txtName.value) {
    // 没有输入值的情况
    divName.classList.add('error');
    return;
  }
  divName.classList.remove('error');
});
