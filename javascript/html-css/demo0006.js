console.log('执行demo0006.js');
// 数组，其实就是一组相同的数据
var htmlcj = [100, 90, 88];
var xsxm = ['刘婧婷', '黑暗骑士'];
console.log(htmlcj, xsxm);
// 数组中的元素可以通过上下标（索引访问，从0开始）
console.log(htmlcj[1]); //显示第二个html的成绩
console.log(xsxm[0]); //显示第一个学生姓名
// 获取数组的长度
console.log(htmlcj.length, xsxm.length);
// css中选择器：#div01表示id="div01"的元素
// #div01 input 表示id="div01"的元素里面的所有input
// js提供获取css选择器表达式对应元素的功能,返回的是数组
var inputs = document.querySelectorAll('#div01 input');
console.log(inputs);
console.log(inputs[1]);
console.log(inputs.length);
var input02 = inputs[1];
console.log(input02.value, input02.getAttribute('type'));
input02.setAttribute('title', '游戏就是好玩！');
// 可以是新的数组，没有对应选择器的元素
var else01 = document.querySelectorAll('p');
console.log(else01, else01.length);
// 选择器获取元素和样式是否有效无关
var else02 = document.querySelectorAll('.div-span span');
console.log(else02, else02.length);
// 组合数组json
var json = {
  c1901: ['黑暗骑士', '刘婧婷'],
  c1902: ['吕佳龙', '沈娇'],
};
console.log(json.c1901);
console.log(json);

// 如何知道页面加载完

document.body.onload = function () {
  console.log('页面加载完毕');
};

// css选择器获取元素说明
var cssSelectorDemo = document.querySelectorAll('.demo');
console.log(cssSelectorDemo);
// 选择器里不打空格是两个元素都进行
var cssSelectorDemo = document.querySelectorAll('div.demo.abc');
console.log(cssSelectorDemo);

// 作业1：创建一个带数组信息的json,用于描述电话号码
// 作业2：练习不同的选择器获取元素，至少要两种不同的选择器获取元素效果
