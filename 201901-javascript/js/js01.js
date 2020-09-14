// console.log('信息');
// 在浏览器console中显示信息
// console.info 显示重要信息
// console.error 显示错误信息
console.log('in js01.js...');
console.info('重要信息');
console.error('错误信息');
// dom获取页面元素
// document.getElementById('页面元素id');
// 获取元素的属性id='id值'对应的元素
let txt01 = document.getElementById('txt01');
let btn01 = document.getElementById('btn01');
let div01 = document.getElementById('div01');
console.log(txt01, btn01, div01);
// js处理时间（其实就是用户的动作）
// 元素.addEventListener('事件名称',function(){
//   动作触发时要执行的代码
// });

btn01.addEventListener('click', function () {
  console.log('按钮点击事件');
  // 获取表单元素特有的属性value(输入值)
  let vtxt01 = txt01.value;
  console.log('输出值：', vtxt01);
  // 修改元素的内容（不常用的方式）
  div01.innerHTML = vtxt01;
});

// dom方式修改页面内容
let div02 = document.getElementById('div02');
console.log(div02);
// document.createElement('要穿件的元素标记名称')
// 创建新的html元素
// document.createElement('input')
// 等同于页面上的<input>
let einput = document.createElement('input');
console.log('js创建出来的元素', einput);
// 元素.append(添加的元素)
// 将括号里面的元素添加到append前面的元素里面
div02.append(einput);

let einput01 = document.createElement('input');
// 元素.setAttribute('属性名称', 属性值)
// 给元素动态添加属性
einput01.setAttribute('type', 'checkbox');
div02.append(einput01);
//多级元素的组织添加
let elabel = document.createElement('label');
elabel.append('男生');
div02.append(elabel);
let einput02 = document.createElement('input');
einput02.setAttribute('type', 'radio');
elabel.append(einput02);
