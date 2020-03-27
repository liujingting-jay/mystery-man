// demo0002.js
console.log('外部的js文件...');
// 输出信息到页面
document.write('js输出信息到页面');
document.write(
  '<h1 style="color: red;">也可以输出html的标记,也可以定义样式</h1>'
);
// console.log('输出到浏览器控制台的信息')
// document.write('输出到浏览器页面的信息，可以是html')
// 修改指定id的元素里的内容
// document.getElementById('id')表示获取页面上对应的id属性值的元素
// inner HTML方法可以获取或者修改元素的内容
document.getElementById('spInfo').innerHTML = '杰伦小迷妹';
document.getElementById('divInfo').innerHTML = '<h3>也支持html标记</h3>';
// js处理点击的动作
// 元素.addEventListener('事件的名称',function(){事件触发后执行的js代码});
// click表示单击
// 下面的代码表示spEvent元素被鼠标点击之后执行控制台输出点击了。。。
document.getElementById('spEvent').addEventListener('click', function() {
  console.log('点击了spEvent');
});

document.getElementById('btnClick').addEventListener('click', function() {
  // document.write('按钮点击后输出的内容...');
  document.getElementById('spClick').innerHTML = '按钮点击后输出到span'+new Date();
});
