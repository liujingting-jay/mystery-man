console.log('执行demo0007.js');
var a = 100;
var b = 3;
// 运算符 +-*/% 加，减，乘，除，取模（余商）
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//a mod b 整除余下的数 100除以3,最大只能是33（只能整除），余数是1
console.log(a % b);
console.log(a * a - b);
console.log(a * (a - b));

// 变量来源于页面的元素以及输入框的值
var jieguo = document.getElementById('jieguo');
console.log(jieguo);
var shuzi01 = document.getElementById('shuzi01');
var shuzi02 = document.getElementById('shuzi02');
console.log(shuzi01, shuzi02);
var shuzi03 = document.getElementById('shuzi03');
var shuzi04 = document.getElementById('shuzi04');
var jieguo01 = document.getElementById('jieguo01');
console.log(jieguo01, shuzi03, shuzi04);
var jisuan = document.getElementById('jisuan');
jisuan.addEventListener('click', function() {
  // 用shuzi01+shuzi02的输入值放到jieguo里面去
  // 注意！！！文本框输入的值都是字符
  // 而计算机中字符的加法是拼接 1+1=11
  // js提供了转换字符成为数值的方法,parseFloat（字符）1+1=2
  jieguo.innerHTML = parseFloat(shuzi01.value) + parseFloat(shuzi02.value);
  jieguo01.innerHTML = parseFloat(shuzi03.value) % parseFloat(shuzi04.value);
});
// 作业：添加 减法，乘法，除法的计算

// 点击动画效果
var donghua = document.getElementById('donghua');
var dh = document.getElementById('dh');
donghua.addEventListener('click', function() {
  dh.setAttribute('class', 'animated bounce');
  // 等动画完成（比如动画是1秒）之后，去掉class的值，恢复到默认的状态
  // setTimeout是延时要执行的代码，第二个参数是延时的毫秒数
  setTimeout(function(){
    dh.setAttribute('class','')
  },1000)
});

// 作业2： 完善上一次动画切换无法点击多次的问题
