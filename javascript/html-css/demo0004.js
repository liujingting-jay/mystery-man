console.log('执行demo0004.js');
// 通过背景颜色的表单元素
var txtRed = document.getElementById('txtRed');
var txtGreen = document.getElementById('txtGreen');
var txtBlue = document.getElementById('txtBlue');
var txtAlpha = document.getElementById('txtAlpha');
var btnColor = document.getElementById('btnColor');
// 通过css样式的选择器获取页面元素(如果有多个匹配的，只返回第一个)
var container = document.querySelector('.container');
console.log(txtRed, txtGreen, txtBlue, txtAlpha, btnColor, container);
// 点击按钮将容器中的样式的背景颜色替换成表单元素的输入值
btnColor.addEventListener('click', function () {
  // 收集表单的输入值
  var red = txtRed.value;
  var green = txtGreen.value;
  var blue = txtBlue.value;
  var alpha = txtAlpha.value;
  // background-color: rgba(0, 0, 0, 0.6);
  var bc = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  console.log(bc);
  // js指定style的时候，如果样式名称是有减号的，需要去掉减号，然后将减号后面的字母转大写
  container.style.backgroundColor = bc;
  //保留样式在本地
  localStorage.setItem('backgroundColor', bc);
});

// 页面尝试加载背景颜色
var backgroundColor = localStorage.getItem('backgroundColor');
if (backgroundColor) {
  container.style.backgroundColor = backgroundColor;
}

// 通过select切换背景图片
var selImg = document.getElementById('selImg');

// 监听select的选项变化
selImg.addEventListener('change', function () {
  console.log(selImg.value);
  // 获取元素
  document.body.style.backgroundImage = 'url(' + selImg.value + ')';
  localStorage.setItem('bac-img', selImg.value);
});
var backing = localStorage.getItem('bac-img');
if (backing) {
  document.body.style.backgroundImage = 'url(' + backing + ')';
}

// 切换动画
var divAnimate = document.getElementById('divAnimate');
var selAnimate = document.getElementById('selAnimate');

selAnimate.addEventListener('change', function () {
  // animated 后面要有1空格，才显示动画
  divAnimate.setAttribute('class', 'animated ' + selAnimate.value);
  setTimeout(function () {
    divAnimate.setAttribute('class', '');
  }, 1000);
});
