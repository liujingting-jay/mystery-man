console.log('执行demo0008.js');
// 记录点击次数
var djcs = 0;
// 人气值
var rqz = 0;
// 页面元素
var sprq = document.getElementById('sprq');
var btnJion = document.getElementById('btnJoin');
// 图片元素
var img01 = document.getElementById('img01');
var img02 = document.getElementById('img02');
// 点击支持按钮的动作
btnJion.addEventListener('click', function() {
  djcs = djcs + 1;
  img01.setAttribute('class', 'animated shake');
  setTimeout(function() {
    img01.setAttribute('class', '');
  }, 1000);
  console.log('点击次数：', djcs);
});

setInterval(function() {
  // 人气值自动根据人数上涨
  rqz = rqz + djcs * 3100;
  sprq.innerHTML = rqz;
  // 人气值10修改图片，还要加上动画
  // js的逻辑判断
  // if(逻辑判断表达式){//如果表达式为真，就会执行括号里面代码}
  // 数值相关逻辑板表达式 a < 10
  // <,>,<=,>=,==对应的意义，小于，大于，小于或者等于，大于或者等于，相等
  if (rqz > 20000) {
    // js直接修改样式（style）的方法
    // 元素.style可以或者设置样式，元素.style.样式属性名称='样式值'
    sprq.style.color = '#880000';
  }
  if(rqz>40000){
    sprq.style.color = '#bb0000';
  }
  if(rqz>80000){
    sprq.style.color = '#ff0000';
  }
  if (rqz > 100000) {
    img01.setAttribute('src', 'images/2.jpg');
    img01.setAttribute('class', 'animated jackInTheBox');
    img02.setAttribute('src', 'images/3.jpg');
    img02.setAttribute('class', 'animated flash');
  }
}, 1000);

// document.getElementById();获取指定id的页面元素
// 元素.innerHTML.修改元素里面的内容
// 元素.setAttribute.修改元素的属性值
// 元素.addEventListener. 给元素添加事件处理，比如单击事件
// setInterval.隔一段时间就对执行代码，无限循环
// setTimeout.隔一段时间就会执行代码，只会一次
// Date对象，获取时间信息
// if +-*/% < > ==
